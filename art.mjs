// Hand-drawn hero illustrations, one SVG per hero art key.
const S = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 92' preserveAspectRatio='none' width='100%' height='92'>`;
const E = `</svg>`;
const INK = '#14181d', NAVY = '#14304d', RED = '#b2382e', GREEN = '#0e6b4e', OCHRE = '#a56f1f', STEEL = '#2e6f8e', PAPER = '#f5efe0';

// COP31: conference table in overtime, clock at midnight
const cop = S +
  `<rect width='480' height='92' fill='#e9e2cf'/>` +
  `<rect y='64' width='480' height='28' fill='${NAVY}'/>` +
  `<rect x='120' y='58' width='240' height='10' rx='3' fill='${OCHRE}'/>` +
  `<rect x='60' y='44' width='18' height='20' fill='${STEEL}'/><rect x='90' y='44' width='18' height='20' fill='${STEEL}'/><rect x='392' y='44' width='18' height='20' fill='${STEEL}'/>` +
  `<circle cx='69' cy='40' r='6' fill='${INK}'/><circle cx='99' cy='40' r='6' fill='${INK}'/><circle cx='401' cy='40' r='6' fill='${INK}'/>` +
  `<circle cx='240' cy='24' r='17' fill='#fff' stroke='${NAVY}' stroke-width='3'/>` +
  `<line x1='240' y1='24' x2='240' y2='12' stroke='${RED}' stroke-width='3'/>` +
  `<line x1='240' y1='24' x2='250' y2='28' stroke='${INK}' stroke-width='3'/>` +
  `<text x='272' y='30' font-family='Arial' font-weight='bold' font-size='15' fill='${RED}'>DAY 13</text>` +
  `<rect x='160' y='64' width='160' height='12' fill='#f2ead6'/>` +
  `<text x='240' y='74' font-family='Arial' font-size='9' text-anchor='middle' fill='${NAVY}'>DRAFT TEXT 3</text>` + E;

// Missiles: night sky over Riyadh, interceptor trails meeting descending missiles
const missiles = S +
  `<rect width='480' height='92' fill='${NAVY}'/>` +
  `<rect x='30' y='58' width='26' height='34' fill='#0d2340'/><rect x='70' y='48' width='26' height='44' fill='#0d2340'/><rect x='410' y='52' width='26' height='40' fill='#0d2340'/>` +
  `<rect x='36' y='50' width='6' height='6' fill='#f2d16b'/><rect x='78' y='40' width='6' height='6' fill='#f2d16b'/><rect x='416' y='44' width='6' height='6' fill='#f2d16b'/>` +
  `<g stroke='#f2d16b' stroke-width='2' stroke-dasharray='4 4'><path d='M120 20 L180 62'/><path d='M240 14 L228 62'/><path d='M360 22 L316 62'/></g>` +
  `<g stroke='#fff' stroke-width='2'><path d='M120 20 Q128 40 180 62'/><path d='M240 14 Q220 40 228 62'/><path d='M360 22 Q330 44 316 62'/></g>` +
  `<g fill='${RED}'><path d='M116 12 l6 8 l-6 8 l-6 -8 z'/><path d='M236 6 l6 8 l-6 8 l-6 -8 z'/><path d='M356 14 l6 8 l-6 8 l-6 -8 z'/></g>` +
  `<g fill='#ffdf8a'><circle cx='180' cy='64' r='7'/><circle cx='228' cy='64' r='7'/><circle cx='316' cy='64' r='7'/></g>` +
  `<text x='12' y='18' font-family='Arial' font-weight='bold' font-size='13' fill='#ffdf8a'>3 INTERCEPTED</text>` + E;

// Kyiv: burning skyline after dawn barrage
const kyiv = S +
  `<rect width='480' height='92' fill='#3a3f47'/>` +
  `<rect x='40' y='40' width='34' height='52' fill='#24282e'/><rect x='90' y='30' width='40' height='62' fill='#1d2126'/><rect x='150' y='48' width='28' height='44' fill='#24282e'/><rect x='300' y='36' width='38' height='56' fill='#1d2126'/><rect x='360' y='46' width='30' height='46' fill='#24282e'/>` +
  `<g fill='#f2d16b'><rect x='98' y='40' width='5' height='5'/><rect x='110' y='52' width='5' height='5'/><rect x='310' y='46' width='5' height='5'/><rect x='322' y='60' width='5' height='5'/></g>` +
  `<g fill='${RED}'><path d='M96 30 l10 -12 l10 12 z' opacity='.9'/><path d='M308 36 l10 -12 l10 12 z' opacity='.85'/></g>` +
  `<g stroke='#e8776b' stroke-width='2' stroke-dasharray='5 4'><path d='M60 6 L100 30'/><path d='M120 4 L156 28'/><path d='M330 8 L318 34'/><path d='M400 4 L380 44'/></g>` +
  `<circle cx='60' cy='6' r='4' fill='${RED}'/><circle cx='120' cy='4' r='4' fill='${RED}'/><circle cx='330' cy='8' r='4' fill='${RED}'/><circle cx='400' cy='4' r='4' fill='${RED}'/>` +
  `<rect y='88' width='480' height='4' fill='${INK}'/>` + E;

export default { cop, missiles, kyiv };
