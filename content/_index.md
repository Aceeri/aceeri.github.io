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
    { name = "LinkedIn", icon = "linkedin", url = "https://linkedin.com/in/conmcclusk" },
    { name = "Email", icon = "email", url = "mailto:conmcclusk@gmail.com" },
]

# Show a few recent posts in home page
recent = false
recent_max = 15
recent_more_text = "more »"
date_format = "%b %-d, %Y"
+++

Hi! I'm a software engineer who enjoys solving tricky problems. This is my blog where I'll occasionally share projects I'm working on.

Recently I've been working towards a 3d [falling sands](https://en.wikipedia.org/wiki/Falling-sand_game) simulation capable of running at >60fps over a large area.

I'd like to write a bit about some of the tricks I've figured out ([margolus neighborhoods](https://en.wikipedia.org/wiki/Block_cellular_automaton) optimized for CPUs, spreading dirty bitsets, etc.) but for now I'll just share some videos here of the current state of the project.

# Basic cell types in 3d
{{ youtube(id="iGvCgEm7Ymk") }}
# Stress testing remeshing/simulation
{{ youtube(id="ZRCCBHKRMpw") }}
