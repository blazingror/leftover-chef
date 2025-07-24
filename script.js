const navButtons = document.querySelectorAll('.nav-buttons button');
const contentArea = document.getElementById('dynamic-content');
const hero = document.getElementById('hero');
const overlay = document.getElementById('hero-overlay');
const sidebar = document.getElementById('sidebar');

function updateView(section) {
  // Update active button
  navButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-section="${section}"]`).classList.add('active');

  // Reset
  contentArea.innerHTML = '';

  if (section === 'home') {
    hero.style.display = 'block';
    overlay.innerHTML = `
      <h1>LEFTOVER CHEF</h1>
      <p class="tagline">Turn Leftovers into T-A-S-T-Y Creations!</p>
      <p class="desc">Welcome to Leftover Chef – your guide to transforming everyday leftovers into extraordinary dishes. Start by exploring one of our most popular creations: <strong>Spiced Chickpea Curry!</strong></p>
    `;
    sidebar.classList.add('hidden');
  } else if (section === 'recipes') {
    hero.style.display = 'block';
    overlay.innerHTML = `
      <h1>RECIPE CENTRAL</h1>
      <p class="tagline">Delicious meals from what you already have.</p>
      <p class="desc">Find recipes by ingredient, style, or cuisine. Whether it's leftover rice or last night's stew — we've got you covered.</p>
    `;
    sidebar.classList.remove('hidden');
  } else if (section === 'about') {
    hero.style.display = 'none';
    sidebar.classList.add('hidden');
    contentArea.innerHTML = `
      <h2>About Leftover Chef</h
