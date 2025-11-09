---
title: Credits
prev: false
next: false
---

# ✨ Credits ✨


<style>
/* Layout */
.credits-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

/* Card */
.credit-card {
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem;
  width: 280px;
  text-align: center;

  /* Center everything inside */
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.credit-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
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
  margin-bottom: 1rem;

  /* absolute centering safeguard */
  display: block;
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
  margin-bottom: 0.75rem;
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
</style>

<div class="credits-grid">

  <div class="credit-card">
    <img src="https://avatars.githubusercontent.com/u/88813136?v=4" alt="Bryce Shaw" class="credit-avatar" />
    <div class="credit-name">Bryce Shaw</div>
    <div class="credit-role">Guide Creator</div>
    <div class="credit-links">
      <a href="https://github.com/Bryceshaw06" target="_blank">GitHub Profile</a>
    </div>
  </div>

  <div class="credit-card">
    <img src="https://avatars.githubusercontent.com/u/183995402?v=4" alt="Xenii" class="credit-avatar" />
    <div class="credit-name">Xenii</div>
    <div class="credit-role">Xii-Boy Ultra Creator</div>
    <div class="credit-links">
      <a href="https://github.com/Xenii1642" target="_blank">GitHub Profile</a>
    </div>
  </div>

  <div class="credit-card">
    <img src="https://avatars.githubusercontent.com/u/98842253?v=4" alt="JamesPi" class="credit-avatar" />
    <div class="credit-name">JamesPi</div>
    <div class="credit-role">3D Renders & Site Help</div>
    <div class="credit-links">
      <a href="https://github.com/Sussy-OS" target="_blank">GitHub Profile</a>
    </div>
  </div>

</div>