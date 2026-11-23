// Dotted world map with numbered pins. Dots #5a5a5a, pins colored per region.
const DOTS = '#5a5a5a';
// Continent blobs: [x, y, rx, ry, color]
const BLOBS = [
  [210, 130, 110, 78, '#2e6f8e'],   // North America
  [248, 300, 62, 82, '#a56f1f'],    // South America
  [448, 96, 52, 34, '#0e6b4e'],     // Europe
  [462, 230, 66, 92, '#b2382e'],    // Africa
  [600, 140, 140, 66, '#2e6f8e'],   // Asia
  [560, 288, 46, 34, '#0e6b4e'],    // South Asia / Indian Ocean rim
  [742, 318, 52, 30, '#a56f1f'],    // Oceania
];
export default function dottedMap(pins) {
  let svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 840 440' width='840' height='440' class='world'>`;
  svg += `<rect width='840' height='440' fill='#f5efe0'/>`;
  for (const [cx, cy, rx, ry] of BLOBS) {
    for (let dx = -rx; dx <= rx; dx += 9) {
      for (let dy = -ry; dy <= ry; dy += 9) {
        if ((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1) {
          svg += `<circle cx='${cx + dx}' cy='${cy + dy}' r='2.4' fill='${DOTS}'/>`;
        }
      }
    }
  }
  const COLORS = ['#2e6f8e', '#b2382e', '#a56f1f', '#0e6b4e', '#5c3d86'];
  const PINCOL = ['#2e6f8e', '#2e6f8e', '#b2382e', '#0e6b4e', '#5c3d86', '#a56f1f', '#a56f1f'];
  pins.forEach((p, i) => {
    const c = PINCOL[p.r % PINCOL.length] || '#b2382e';
    svg += `<circle cx='${p.x}' cy='${p.y}' r='10' fill='${c}' stroke='#fff' stroke-width='2'/>`;
    svg += `<text x='${p.x}' y='${p.y + 3.5}' font-size='9.5' font-family='Arial' font-weight='bold' text-anchor='middle' fill='#fff'>${i + 1}</text>`;
  });
  svg += `</svg>`;
  return svg;
}
