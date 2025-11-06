+++
title = "Pseudo-margolus neighborhoods"
date = "2025-11-02"
draft = false
+++

## Falling sands, optimization, and memory layout
When we are thinking about how to push falling sands to its limits, we have 2 priorities: cache friendliness and parallelism.

The first is simpler, we place cells that are close together spatially close together in memory as well, which just means... arrays! I'd go into this in more detail but that's not really the focus of this post. The short of it:
- 4096 element arrays (64x64 in 2d, 16x16x16 in 3d) seemed to be the sweet spot of linearization performance and cache locality for modern hardware. You can tile these together to make "chunks", so you can simulate larger grids. If you want *really* large grids you'll need to start looking into [sparse voxel quad/octrees](https://en.wikipedia.org/wiki/Sparse_voxel_octree) or my favorite: 64trees (trees that are 4-ary instead of 2-ary, so you have 64 children instead of 8 per node, this gives you half the depth in the tree and improves cache locality when traversing).
- [Morton/Z-order encoding](https://en.wikipedia.org/wiki/Z-order_curve), while overall putting cells closer to their neighbors, is shot down by the overhead of calculating the index for it, even while using special instructions like [pdep/pext](https://orlp.net/blog/extracting-depositing-bits/) (not true on GPUs though!).

Instead we are going to be looking into ways we segment up this memory so that we can process it in parallel!

## Parallelism
How do we break up these arrays of cells so we can go throw them onto other threads?

[Noita](https://en.wikipedia.org/wiki/Noita_(video_game)) takes the approach of having 4 passes over chunks. Taking every other chunk in each direction so that there is a buffer zone of about 1/2 the size of a chunk that you can play around with on separate threads.

Atomic compare and swaps are another approach I've seen done on both the CPU and GPU. This is a non-deterministic and potentially lossy approach, but if you wanted maximum speed, this is your go-to. You still need to segment up your grid into work groups but it can be done in any shape or way you'd want. Typically you might reserve a bit for each cell to indicate whether or not the cell has already been updated. I mainly don't like this due to the overhead of atomics plus the fact that it isn't deterministic, which destroys any chance of this being networked.

In this last approach we divide up the grid into a bunch of blocks and only allow each block to interact within itself. After one run you shift the blocks to overlap for the next run. This is called [block cellular automata](https://en.wikipedia.org/wiki/Block_cellular_automaton) with the
simplest method being [margolus neighborhoods](https://en.wikipedia.org/wiki/Margolus_neighborhood).

This sounds *very* similar to Noita's approach, so what's the difference?

Noita only processes 1 out of 4 chunks at a time and then repeats the process again after a shift. Block cellular automata processes all blocks at the same time, which helps with reducing the overhead of using something like work stealing.

We run into a couple of issues with margolus neighborhoods fairly fast though:
- The artifacts from the boundaries of the blocks is *very* evident.
- CPUs *hate* this. When one core writes to a piece of memory, it will evict it from all other cores' caches, leading to cache misses everywhere.

How do we fix these issues? Scale it up! Instead of 2x2 blocks of *cells*, we do 2x2 blocks of *chunks*!

Artifacts will still exist, but will be diminished heavily, you'll only notice it with fast movement getting a bit slowed down at chunk boundaries. But we have entirely fixed our problems with thrashing the cache.
