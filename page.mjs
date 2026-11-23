import { TEMPLATE_CSS } from './css.mjs';
import ART from './art.mjs';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default function buildHTML(D) {
  const stats = D.stats.map(s =>
    `<div class="stat"><div class="n">${esc(s.n)}</div><div class="t">${esc(s.t)}</div></div>`).join('');
  const heroes = D.heroes.map((h, i) =>
    `<div class="hero"><div><span class="clock">${esc(h.clock)}</span>` +
    `<span class="hcity">${esc(h.city)}</span></div>` +
    `<div class="htag">${esc(h.tag)}</div>` +
    `<div class="hhead">${esc(h.headline)}</div>` +
    `<div class="hbody">${esc(h.body)}</div>` +
    `<div class="claim">${esc(h.claim)}</div></div>`).join('');
  const n0 = 4;
  const rows = D.timeline.map((t, i) => {
    const [clock, city, region, text, src] = t;
    return `<div class="trow"><div class="tclock">${esc(clock)}</div>` +
      `<div class="tbody"><span class="tcity">${esc(city)}</span>` +
      `<span class="treg">${esc(region)}</span>` +
      `<div class="ttext">${esc(text)}</div>` +
      `<div class="tsrc">${esc(src)}</div></div></div>`;
  }).join('');
  const also = D.also_on.map((a, i) =>
    `<div class="aitem"><span class="anum">${n0 + 26 + i}</span><span><b>${esc(a[0])}</b> ` +
    `<span class="asrc">· ${esc(a[2])}</span></span></div>`).join('');
  const total = 3 + D.timeline.length + D.also_on.length;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${TEMPLATE_CSS}</style></head><body>` +
    `<div class="page"><div class="kickbar"><span class="dia">◆ ◆ ◆</span>` +
    `<span class="kick">${esc(D.kicker)}</span><span class="dia">◆ ◆ ◆</span></div>` +
    `<div class="masthead">${esc(D.paper)}</div>` +
    `<div class="deskline">WORLD DESK · ${total} DATED STORIES · THE COMPLETE 24 HOURS UT</div>` +
    `<div class="datebanner">SUNDAY 22 NOVEMBER <span class="yr">2026</span> · COMPLETE 24H UT</div>` +
    `<div class="standfirst">${esc(D.standfirst).replace(/ · /g, ' <b>·</b> ')}</div>` +
    `<div class="rule"></div><div class="rule2"></div>` +
    `<div class="stats">${stats}</div>` +
    `<div class="sec">THE DAY AT FULL STRETCH · 00:20 UT → 23:59 UT</div>` +
    `<div class="heroes">${heroes}</div>` +
    `<div class="sec">AROUND THE CLOCK · EVERY HOUR OF SUNDAY, UNIVERSAL TIME</div>` +
    `<div class="tgrid">${rows}</div>` +
    `<div class="sec">ALSO ON SUNDAY 22 NOVEMBER · ${D.also_on.length} MORE STORIES</div>` +
    `<div class="also">${also}</div>` +
    `<div class="dcbox"><span class="dctag">DATE CHECK</span>${esc(D.date_check)}</div>` +
    `<div class="footer">${esc(D.footer)}<div class="srcs">${esc(D.sources)}</div></div>` +
    `</div></body></html>`;
}
