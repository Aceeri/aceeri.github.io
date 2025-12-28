
+++
title = "Dirty Bitsets"
date = "2025-11-22"
draft = false
+++

WIP

We don't want or even need to process every single voxel in a simulation every single frame. Why would we expect a different result from a sand cell that couldn't do
anything in the last simulation and none of the directions it could move changed either?

This is where we steal something from Minecraft: block updates.

You only need to process voxels around the ones that have changed the last frame{{ cite(id="1") }}.  Therefore, we maintain a list of "dirty" voxel positions and we add all of the neighbors of any modified voxel, as well as the modified voxel itself. This gives us a list of voxels that need to be processed on the next frame, which should be a significant subset of all of the voxels in the world. 

But now we have a different problem: maintaining this list. Naively we could store an `IVec3` or an index in the chunk of which voxels are dirty, but this balloons in memory fast and also creates a lot more cache misses when reading from it for processing. Having a variable sized list is also not ideal, since this might end up in stutters depending on how allocation timing lines up (hint: usually poorly).

The solution? A bitset!

Each bit represents whether or not a single voxel in a chunk needs to be processed. Setting these is a little bit more annoying than pushing to a `Vec`/list or setting a `HashSet`, but not too much more:

```rust
// 64 bit words in this bitset, which is ideal for most modern CPUs.
let mut masks: Vec<u64> = vec![0; 16 * 16 * 16 / 64]; // 16^3 / 64

let mask_index = voxel_index / 64;
let bit_index = voxel_index % 64;
masks[mask_index] |= 1 << bit_index; // set
masks[mask_index] &= !(1 << bit_index); // unset
```

This is all well and good, but there's a small note about the above that shows a couple of inefficiencies in practice when setting the 26 neighbors and the 1 that changed:
- We re-set the same index *very* often in common cellular automata, usually updates trigger a cascade of effects that are all local to the same area.
- Everytime we set a voxel, we might be triggering a second cache miss, not necessarily because of jumping between the neighbors, but because we aren't batching these neighbor sets.

This might seem small, but the cost adds up when running this over thousands of simulated voxels. To mitigate this, lets split it up:
- Setting a voxel only sets a single bit in the bitset.
- Propagating to the neighbors is done all together.

// TODO:
- Show example of propagation to neighbors
- Show bitshifting optimizations on top of that.
- Edge cases & propagating to neighboring chunks

{% citation(id="1") %}
Technically you could get more specific and each voxel could have "subscriber" directions, but I think that amount of management leads to too much overhead that is defeats most of the purpose.
{% end %}

<br>
{{ last_post(text="Margolus Neighborhoods", post="margolus-neighborhoods") }}
