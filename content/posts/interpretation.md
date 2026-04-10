
+++
title = "Interpreted vs Compiled"
date = "2025-11-22"
draft = false
+++

Very dumb post.

We typically use to describe how far away a programming language is from the output: interpreted and compiled.

But this makes me think this is a *spectrum*. Python and Lua are commonly called interpreted, while C or Rust are considered compiled. But what about Java? Java is compiled to an intermediary bytecode before then being interpreted to the native machine's instructions.

How do we place these things on this spectrum?

Well, let's first think of the extremes:

# Compiled

First for now CPU instructions are the most compiled. But then we consider, the CPU still goes through a lot of roundabout ways to execute your instructions in order to get a result. Transistors are far from the most direct path to the output.

Mechanical linkage is *more* compiled than any CPU, since there is less indirection between your input and the outputs. But now that we've broken this box, mechanical linkage is far from the most direct. Chemical reactions could turn one state of matter to another to give you a result more directly.

# Interpreted

Now Python isn't even close to the most interpreted. What about human language? Isn't someone telling someone else or an LLM to write a program in Java that is then interpreted in a virtual machine into CPU instructions more "interpreted"? I guess now this just comes down to layering more and more indirection between yourself and the output and you've become the CEO of a dysfunctionally large corporation.

# Conclusion

I don't know where I was going with this.
