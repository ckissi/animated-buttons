import fs from 'node:fs';
import path from 'node:path';
import { loaders, type LoaderType } from '../data/loaders';

/**
 * Build-time extraction of each loader's CSS from global.css.
 *
 * The stylesheet documents every loader with a numbered marker comment
 * (`/* 01 Aero-Dyn — orbital ring *​/`). We slice the file on those markers
 * to recover one block per loader, then make each block self-contained by
 * appending any shared `@keyframes` it references but doesn't define itself
 * (e.g. several spinners reuse `@keyframes spin`).
 */

const cssPath = path.join(process.cwd(), 'src/styles/global.css');
const css = fs.readFileSync(cssPath, 'utf8');

// `--ink` is the per-cell token the loaders paint with; surface it so the
// copied snippet is genuinely standalone.
const INK_NOTE = '/* Set --ink to your foreground colour (defaults to currentColor here). */\n:root { --ink: currentColor; }\n\n';

/** Extract every `@keyframes name { … }` block with brace matching. */
function extractKeyframes(src: string): Map<string, string> {
  const map = new Map<string, string>();
  const re = /@keyframes\s+([\w-]+)\s*\{/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    let i = m.index + m[0].length;
    let depth = 1;
    while (i < src.length && depth > 0) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}') depth--;
      i++;
    }
    map.set(m[1], src.slice(m.index, i).trim());
  }
  return map;
}

const allKeyframes = extractKeyframes(css);

// Slice the loader section into one block per numbered marker.
const markerRe = /\/\*\s*(\d{2})\s+[^*]*?\*\//g;
const markers = [...css.matchAll(markerRe)];
const sectionEnd = css.indexOf('/* ---------- Lazy loading');

const byIndex = new Map<string, string>();
markers.forEach((marker, i) => {
  const start = marker.index!;
  const end = i + 1 < markers.length ? markers[i + 1].index! : sectionEnd;
  byIndex.set(marker[1], css.slice(start, end).trim());
});

function selfContained(block: string): string {
  const definedHere = new Set([...block.matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1]));
  const extras: string[] = [];
  for (const [name, def] of allKeyframes) {
    if (definedHere.has(name)) continue;
    // referenced as a whole word somewhere in the block (animation shorthand etc.)
    if (new RegExp(`\\b${name}\\b`).test(block)) extras.push(def);
  }
  return extras.length ? `${block}\n\n${extras.join('\n\n')}` : block;
}

export const loaderCss: Record<string, string> = {};
for (const loader of loaders) {
  const block = byIndex.get(loader.index);
  if (block) loaderCss[loader.type] = INK_NOTE + selfContained(block);
}

/** HTML markup a given loader needs — mirrors Loader.astro. */
const childCounts: Partial<Record<LoaderType, number>> = {
  dots: 3, bars: 5, cells: 9, chev: 3, wave: 5, stack: 4, stairs: 3, metro: 3,
  spiral: 8, segments: 5, swap: 2, twins: 2, blink: 2, shimmer: 3, trio: 3,
  photon: 4, squish: 2, carousel: 3, typing: 3, atom: 2, cards: 3, newton: 5,
  domino: 4, ferris: 4, traffic: 3, cellular: 4, tetris: 3, quarters: 4, fold: 3,
  rain: 3, dna: 5, bubble: 3, firework: 8, slide: 3, wifi: 3, battery: 3,
  trail: 3, magnet: 2, cascade: 4, pong: 2, blinds: 4, gyro: 2, cornerdots: 4,
  ticks: 12,
};

const textContent: Partial<Record<LoaderType, string>> = {
  type: 'LOADING', cursor: 'ZX-OS', glitch: 'ZX-9',
};

const svgMarkup: Partial<Record<LoaderType, string>> = {
  helix: '<svg class="ld-helix" viewBox="0 0 64 32"><path d="M16 16c0-6 4-10 8-10s16 20 24 20 8-4 8-10-4-10-8-10S24 26 16 26 8 22 8 16s4-10 8-10" /></svg>',
  dashring: '<svg class="ld-dashring" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" /></svg>',
  ekg: '<svg class="ld-ekg" viewBox="0 0 64 32"><polyline points="0,16 14,16 20,6 28,26 34,16 64,16" /></svg>',
};

export function loaderMarkup(type: LoaderType): string {
  if (svgMarkup[type]) return svgMarkup[type]!;
  if (textContent[type]) return `<div class="ld-${type}">${textContent[type]}</div>`;
  const count = childCounts[type] ?? 0;
  if (!count) return `<div class="ld-${type}"></div>`;
  return `<div class="ld-${type}">${'<i></i>'.repeat(count)}</div>`;
}
