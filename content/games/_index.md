+++
title = "Games"
description = "Games I've made"
template = "prose.html"
insert_anchor_links = "right"

[extra]
lang = "en"

title = "Games"
subtitle = "Games I've made"

back_to_top = true
toc = false
comment = false
copy = false
+++

<style>
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.game-card {
  border: 1px solid var(--text-decoration-color);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.game-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.game-card > a:first-child img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.game-card .game-info {
  padding: 0.75rem 1rem;
}
.game-card .game-info h3 {
  margin: 0 0 0.25rem 0;
}
.game-card .game-info h3 a {
  text-decoration: none;
  color: var(--text-color);
}
.game-card .game-info h3 a:hover {
  color: var(--primary-color);
}
.game-card .game-info p {
  margin: 0;
  color: var(--text-pale-color);
  font-size: 0.9em;
}
.game-card {
  position: relative;
}
.jam-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #1c1c1c;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
}
.jam-badge:hover {
  transform: scale(1.1);
}
.jam-badge img {
  height: 100%;
  width: auto;
  display: block;
}
</style>

<div class="game-grid">
  <div class="game-card">
    <a href="https://aceeri.itch.io/rat-pit"><img src="/images/ratpit.png" alt="RAT PIT"></a>
    <a class="jam-badge" href="https://itch.io/jam/bavy-jam-1" title="Bavy Jam #1"><img src="/images/bavy-jam-48.png" alt="Bavy Jam #1"></a>
    <div class="game-info">
      <h3><a href="https://aceeri.itch.io/rat-pit">RAT PIT</a></h3>
      <p>RATS IN THE PIT, INTO THE PIT, GROW THE PIT.</p>
      <p>Idler/cleaning game for Bavy Jam #1</p>
    </div>
  </div>
  <div class="game-card">
    <a href="https://aceeri.itch.io/the-lob"><img src="/images/thelob.png" alt="The Lob"></a>
    <a class="jam-badge" href="https://itch.io/jam/bevy-jam-7" title="Bevy Jam #7"><img src="/images/bevy-jam-48.png" alt="Bevy Jam #7"></a>
    <div class="game-info">
      <h3><a href="https://aceeri.itch.io/the-lob">The Lob</a></h3>
      <p>You are a cleaner snail in the Lob.</p>
      <p>RPG/Shooter/Digging? game for the Bevy Jam #7</p>
    </div>
  </div>
  <div class="game-card">
    <a href="https://aceeri.itch.io/brewalized"><img src="/images/brewalized.png" alt="Brewalized"></a>
    <a class="jam-badge" href="https://itch.io/jam/bevy-jam-2" title="Bevy Jam #2"><img src="/images/bevy-jam-48.png" alt="Bevy Jam #2"></a>
    <div class="game-info">
      <h3><a href="https://aceeri.itch.io/brewalized">Brewalized</a></h3>
      <p>Physics-based potion brewing game.</p>
      <p>Physics game for the Bevy Jam #2</p>
    </div>
  </div>
</div>
