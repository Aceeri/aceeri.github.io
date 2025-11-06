+++
template = 'home.html'

[extra]
lang = 'en'

footer = false

# If you don't want to display id/bio/avatar, simply comment out that line
name = "Connor McCluskey"
id = "aceeri"
bio = "experimentor and optimizer"
avatar = "images/nyoomfinch.webp"
links = [
    { name = "GitHub", icon = "github", url = "https://github.com/aceeri" },
    { name = "LinkedIn", icon = "linkedin", url = "https://linkedin.com/conmcclusk" },
    { name = "Email", icon = "email", url = "mailto:conmcclusk@gmail.com" },
]

# Show a few recent posts in home page
recent = false
recent_max = 15
recent_more_text = "more »"
date_format = "%b %-d, %Y"
+++

Hi, I'm Connor and I'm a software engineer who enjoys optimization. This is my blog where I'll occasionally share projects I'm working on.

Recently I've been making 3d cellular automata fast enough to run on the CPU and be networked across clients with eventual consistency. I'd like to write a
bit about some of the optimizations I've figured out (margolus neighborhoods for CPUs, dirty bitsets and spreading bits, etc.) but for now I'll share some
videos here of the current state of the project.

Basic cell types in 3d
{{ youtube(id="iGvCgEm7Ymk") }}

Larger scale sand digging to stress test remeshing/simulation
{{ youtube(id="ZRCCBHKRMpw") }}
