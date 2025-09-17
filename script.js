// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Sample fixtures data — edit for your club
const fixtures = [
  { date: '2025-09-21', opponent: 'Hicksville CC', venue: 'Syosset Oval', format: 'T20', time: '10:00 AM' },
  { date: '2025-09-28', opponent: 'Glen Cove CC', venue: 'Glen Cove Park', format: '40 ov', time: '9:30 AM' },
  { date: '2025-10-05', opponent: 'Mineola CC', venue: 'Syosset Oval', format: 'T20', time: '2:00 PM' },
];
const tbody = document.getElementById('fixtures-body');
if (tbody) {
  fixtures.forEach(f => {
    const tr = document.createElement('tr');
    const dt = new Date(f.date);
    tr.innerHTML = `
      <td>${dt.toLocaleDateString(undefined, { weekday:'short', month:'short', day:'numeric' })}</td>
      <td>${f.opponent}</td>
      <td>${f.venue}</td>
      <td>${f.format}</td>
      <td>${f.time}</td>
    `;
    tbody.appendChild(tr);
  });
}
