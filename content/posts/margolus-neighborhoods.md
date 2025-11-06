+++
title = "Margolus Neighborhoods on CPUs"
date = "2025-11-02"
draft = true
+++

Margolus neighborhoods are a useful optimization for most cellular automata simulations, like Noita/Powder Toy/etc. since they make the problem
embarassingly parallel. This is fantastic for GPUs especially but when we are dealing with CPUs, you're going to lose a lot of performance.
