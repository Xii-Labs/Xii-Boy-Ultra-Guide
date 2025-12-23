---
title: Credits
prev: false
next: false
---

<h1 class="credits-title">✨ Credits ✨</h1>

<style>
/* Page title */
.credits-title {
  text-align: center;
  margin: 0.5rem 0 0.25rem;
}

/* Reusable boxed section */
.section-box {
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.25rem 1.25rem 1rem;
  margin: 1.25rem auto 1.75rem;
  max-width: 1100px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}

/* Section header (centered) */
.section-header {
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem;
}

/* Grid for the team (2 columns on wide screens, centers the 3rd) */
.credits-grid.team {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-items: center;   /* center cards within their cells */
  align-items: stretch;
  margin: 0.75rem auto 0.25rem;
}

/* Center last card when there is an odd number of team members */
.credits-grid.team > .card-link:last-child {
  grid-column: 1 / -1;
  justify-self: center;
}

/* Two‑column grid for beta testers */
.credits-grid-beta {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 1.25rem 1.5rem;
  justify-items: center;
  align-items: stretch;
  margin-top: .5rem;
}

/* Center the last card when we have an odd count */
.credits-grid-beta > .credit-card:last-child {
  grid-column: 1 / -1;
  justify-self: center;
}

/* Make whole card clickable (for team) */
.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* Card */
.credit-card {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
  padding: 1.75rem 1.25rem;
  width: 320px;
  max-width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.card-link:hover .credit-card,
.credit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
  border-color: var(--vp-c-brand);
}

/* Avatar */
.credit-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--vp-c-brand);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.9rem;
}

/* Text */
.credit-name {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-1);
}

.credit-role {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

.credit-links a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.credit-links a:hover {
  text-decoration: underline;
}

/* Responsive tweaks */
@media (max-width: 1050px) {
  .credits-grid.team { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .credits-grid-beta {
    grid-template-columns: 1fr;
  }
  .credits-grid-beta > .credit-card:last-child {
    grid-column: auto;
  }
}
</style>

<!-- Xii‑Boy Team -->
<div class="section-box">
<div class="section-header">Xii‑Boy Team</div>
<div class="credits-grid team">
<a class="card-link" href="https://github.com/Bryceshaw06" target="_blank" rel="noopener">
  <div class="credit-card">
    <img src="https://avatars.githubusercontent.com/u/88813136?v=4" alt="Bryce Shaw" class="credit-avatar" />
    <div class="credit-name">Bryce Shaw</div>
    <div class="credit-role">Guide Creator</div>
  </div>
</a>
<a class="card-link" href="https://github.com/Xenii1642" target="_blank" rel="noopener">
  <div class="credit-card">
    <img src="https://avatars.githubusercontent.com/u/183995402?v=4" alt="Xenii" class="credit-avatar" />
    <div class="credit-name">Xenii</div>
    <div class="credit-role">Xii‑Boy Ultra Creator</div>
  </div>
</a>
<a class="card-link" href="https://github.com/Sussy-OS" target="_blank" rel="noopener">
  <div class="credit-card">
    <img src="https://avatars.githubusercontent.com/u/98842253?v=4" alt="JamesPi" class="credit-avatar" />
    <div class="credit-name">JamesPi</div>
    <div class="credit-role">3D Renders - Site Help - Beta Kit Tester</div>
  </div>
</a>
</div>
</div>

<!-- Beta Testers -->
<div class="section-box">
<div class="section-header">Beta Kit Testers</div>
<div class="credits-grid-beta">
  <div class="credit-card">
    <img src="/images/profiles/joshsjunk.png" alt="JoshsJunk05" class="credit-avatar" />
    <div class="credit-name">JoshsJunk05</div>
  </div>
  <div class="credit-card">
    <img src="/images/profiles/machonacho.png" alt="MachoNacho" class="credit-avatar" />
    <div class="credit-name">MachoNacho</div>
  </div>
  <div class="credit-card">
    <img src="/images/profiles/moddingmarius.png" alt="Modding Marius" class="credit-avatar" />
    <div class="credit-name">Modding Marius</div>
  </div>
  <div class="credit-card">
    <img src="/images/profiles/supertazon.png" alt="Supertazon" class="credit-avatar" />
    <div class="credit-name">Supertazon</div>
  </div>
  <div class="credit-card">
    <img src="/images/profiles/yveltalgriffin.png" alt="YveltalGriffin" class="credit-avatar" />
    <div class="credit-name">YveltalGriffin</div>
  </div>
</div>
</div>