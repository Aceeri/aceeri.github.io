
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





<hr>
{% citation(id="1") %}
Technically you could get more specific and each voxel could have "subscriber" directions, but I think that amount of management leads to too much overhead that is defeats most of the purpose.
{% end %}

<br>
{{ last_post(text="Margolus Neighborhoods", post="margolus-neighborhoods") }}
