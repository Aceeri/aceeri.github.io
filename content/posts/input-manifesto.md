+++
title = "The Bird's Input Sins"
date = "2026-03-10"
draft = false
+++

Inputs are one of the most important things to making a game feel responsive, but *so* many games get 
extremely basic inputs wrong. Even if a player doesn't consciously recognize the discrepancies, they will 
feel it in gameplay and it will feel *bad*.

# STOP PRIORITIZING MOVEMENT DIRECTIONS!

Let's say I'm throwing together a basic character controller and I'm wanting the character to move left with `A` and right with `D`. What should happen when I press both at the same time?

It should ***CANCEL THE MOVEMENT OUT***.

A majority of games implement it like this:
```rust
let mut movement = Vec2::new(0.0, 0.0);
if buttons.pressed(KeyCode::KeyA) {
    movement.x = -1.0;
} else if buttons.pressed(KeyCode::KeyD) {
    movement.x = 1.0;
}
```
This prioritizes the left over the right.

Transitioning this to the correct way is separating the conditions and adding/subtracting 1 instead of assigning:
```rust
let mut movement = Vec2::new(0.0, 0.0);
if buttons.pressed(KeyCode::KeyA) {
    movement.x -= 1.0;
}

if buttons.pressed(KeyCode::KeyD) {
    movement.x += 1.0;
}

// A     -> [-1.0, 0.0]
// D     -> [1.0, 0.0]
// A & D -> [0.0, 0.0]
```
Last key wins is another sane option, but harder to implement and debatable on whether it is better or desirable.

# STOP MULTIPLYING MOUSE DELTAS BY DELTA TIME!

I've seen this one too many times to the point that I've almost come to expect this one in any project I pull open.

```rust
// STOP DOING THIS. PLEASE
camera_yaw += mouse_delta.x * settings.mouse_sensitivity * time.delta_secs(); 
// DO THIS
camera_yaw += mouse_delta.x * settings.mouse_sensitivity; 
```

Why? Because mouse deltas are measurements of distance the mouse has traveled.

If I move my mouse 1 inch to right, I am expecting that to rotate my camera the same amount regardless of whether the game is running at 30fps or 60fps. If you multiply that by the delta time, the same exact input will give you different results depending on the runtime.

This amplifies stutters and variance in framerates. Even if the user can't directly see the variance from 120<->180 fps, they *will* feel it when they try to look around.

I think the reason it is so prevalent is that mouse deltas when directly translated to rotation are much too large. But please, just use a constant value like `1.0 / 180.0` to make it smaller, not your frame times.
