export type LoaderType =
  | 'ring'
  | 'core'
  | 'dots'
  | 'bars'
  | 'dual'
  | 'sweep'
  | 'orbit'
  | 'flip'
  | 'cells'
  | 'type'
  | 'helix'
  | 'chev'
  | 'echo'
  | 'comet'
  | 'wave'
  | 'quad'
  | 'pendulum'
  | 'stack'
  | 'stairs'
  | 'dashring'
  | 'morph'
  | 'radar'
  | 'metro'
  | 'clock'
  | 'ball'
  | 'cursor'
  | 'spiral'
  | 'segments'
  | 'swap'
  | 'heart'
  | 'zigzag'
  | 'twins'
  | 'scan'
  | 'perimeter'
  | 'blink'
  | 'binary'
  | 'shimmer'
  | 'trio'
  | 'photon'
  | 'coin'
  | 'squish'
  | 'carousel'
  | 'typing'
  | 'barber'
  | 'atom'
  | 'glitch'
  | 'fill'
  | 'dashspin'
  | 'finder'
  | 'reticle'
  | 'cards'
  | 'worm'
  | 'pixel'
  | 'newton'
  | 'domino'
  | 'windmill'
  | 'ferris'
  | 'hourglass'
  | 'traffic'
  | 'breathe'
  | 'cellular'
  | 'tetris'
  | 'marquee'
  | 'counter'
  | 'pie'
  | 'halo'
  | 'quarters'
  | 'metronome'
  | 'fold'
  | 'eclipse'
  | 'rain'
  | 'ascii'
  | 'dna'
  | 'gear'
  | 'bubble'
  | 'firework'
  | 'slide'
  | 'wifi'
  | 'battery'
  | 'trail'
  | 'wobble'
  | 'magnet'
  | 'cascade'
  | 'roller'
  | 'dial'
  | 'iris'
  | 'pong'
  | 'frame'
  | 'ekg'
  | 'hexa'
  | 'tri'
  | 'blinds'
  | 'gyro'
  | 'spark'
  | 'tally'
  | 'drip'
  | 'compass'
  | 'cornerdots'
  | 'ticks';

export interface Loader {
  index: string;
  name: string;
  type: LoaderType;
}

export const loaders: Loader[] = [
  { index: '01', name: 'Aero-Dyn', type: 'ring' },
  { index: '02', name: 'Thermal', type: 'core' },
  { index: '03', name: 'V-Grade', type: 'dots' },
  { index: '04', name: 'Delta-V', type: 'bars' },
  { index: '05', name: 'Nexus', type: 'dual' },
  { index: '06', name: 'Signal', type: 'sweep' },
  { index: '07', name: 'Orbitra', type: 'orbit' },
  { index: '08', name: 'Geo-Sync', type: 'flip' },
  { index: '09', name: 'Quantara', type: 'cells' },
  { index: '10', name: 'Stella', type: 'type' },
  { index: '11', name: 'Helix', type: 'helix' },
  { index: '12', name: 'Vector', type: 'chev' },
  { index: '13', name: 'Echo-Pulse', type: 'echo' },
  { index: '14', name: 'Korona', type: 'comet' },
  { index: '15', name: 'Tidal', type: 'wave' },
  { index: '16', name: 'Quad-Core', type: 'quad' },
  { index: '17', name: 'Pendula', type: 'pendulum' },
  { index: '18', name: 'Stak-9', type: 'stack' },
  { index: '19', name: 'Ascent', type: 'stairs' },
  { index: '20', name: 'Meridian', type: 'dashring' },
  { index: '21', name: 'Morpho', type: 'morph' },
  { index: '22', name: 'Radar-X', type: 'radar' },
  { index: '23', name: 'Metro-Line', type: 'metro' },
  { index: '24', name: 'Chrono', type: 'clock' },
  { index: '25', name: 'Gravit', type: 'ball' },
  { index: '26', name: 'Term-OS', type: 'cursor' },
  { index: '27', name: 'Helio-8', type: 'spiral' },
  { index: '28', name: 'Segmenta', type: 'segments' },
  { index: '29', name: 'Swap-Z', type: 'swap' },
  { index: '30', name: 'Cardio', type: 'heart' },
  { index: '31', name: 'Zig-7', type: 'zigzag' },
  { index: '32', name: 'Gemini', type: 'twins' },
  { index: '33', name: 'Scan-Line', type: 'scan' },
  { index: '34', name: 'Perimeter', type: 'perimeter' },
  { index: '35', name: 'Optic', type: 'blink' },
  { index: '36', name: 'Binar', type: 'binary' },
  { index: '37', name: 'Skel-X', type: 'shimmer' },
  { index: '38', name: 'Tri-Arc', type: 'trio' },
  { index: '39', name: 'Photon', type: 'photon' },
  { index: '40', name: 'Obverse', type: 'coin' },
  { index: '41', name: 'Squish-2', type: 'squish' },
  { index: '42', name: 'Rotunda', type: 'carousel' },
  { index: '43', name: 'Chat-Sys', type: 'typing' },
  { index: '44', name: 'Barber-9', type: 'barber' },
  { index: '45', name: 'Atomik', type: 'atom' },
  { index: '46', name: 'Glitch-7', type: 'glitch' },
  { index: '47', name: 'Hydra-Fill', type: 'fill' },
  { index: '48', name: 'Stitch', type: 'dashspin' },
  { index: '49', name: 'Finder', type: 'finder' },
  { index: '50', name: 'Reticle', type: 'reticle' },
  { index: '51', name: 'Strata', type: 'cards' },
  { index: '52', name: 'Worm-Drive', type: 'worm' },
  { index: '53', name: 'Pixel-8', type: 'pixel' },
  { index: '54', name: 'Newton', type: 'newton' },
  { index: '55', name: 'Domino', type: 'domino' },
  { index: '56', name: 'Turbine', type: 'windmill' },
  { index: '57', name: 'Ferris-4', type: 'ferris' },
  { index: '58', name: 'Sandglass', type: 'hourglass' },
  { index: '59', name: 'Semaphore', type: 'traffic' },
  { index: '60', name: 'Respira', type: 'breathe' },
  { index: '61', name: 'Cell-Net', type: 'cellular' },
  { index: '62', name: 'Tetra-Drop', type: 'tetris' },
  { index: '63', name: 'Ticker', type: 'marquee' },
  { index: '64', name: 'Centum', type: 'counter' },
  { index: '65', name: 'Sector', type: 'pie' },
  { index: '66', name: 'Halo', type: 'halo' },
  { index: '67', name: 'Quadrant', type: 'quarters' },
  { index: '68', name: 'Tempo', type: 'metronome' },
  { index: '69', name: 'Fold-3', type: 'fold' },
  { index: '70', name: 'Eclipse', type: 'eclipse' },
  { index: '71', name: 'Rainfall', type: 'rain' },
  { index: '72', name: 'Glyph-Bar', type: 'ascii' },
  { index: '73', name: 'Genome', type: 'dna' },
  { index: '74', name: 'Cog-Werk', type: 'gear' },
  { index: '75', name: 'Aqualine', type: 'bubble' },
  { index: '76', name: 'Nova-Burst', type: 'firework' },
  { index: '77', name: 'Tri-Slide', type: 'slide' },
  { index: '78', name: 'Uplink', type: 'wifi' },
  { index: '79', name: 'Volt-Cell', type: 'battery' },
  { index: '80', name: 'Comet-Tail', type: 'trail' },
  { index: '81', name: 'Wobblon', type: 'wobble' },
  { index: '82', name: 'Magneto', type: 'magnet' },
  { index: '83', name: 'Cascade', type: 'cascade' },
  { index: '84', name: 'Rollo', type: 'roller' },
  { index: '85', name: 'Gauge-X', type: 'dial' },
  { index: '86', name: 'Iris-9', type: 'iris' },
  { index: '87', name: 'Pong-72', type: 'pong' },
  { index: '88', name: 'Frame-Spin', type: 'frame' },
  { index: '89', name: 'Pulse-EKG', type: 'ekg' },
  { index: '90', name: 'Hexa-Core', type: 'hexa' },
  { index: '91', name: 'Trigon', type: 'tri' },
  { index: '92', name: 'Louver', type: 'blinds' },
  { index: '93', name: 'Gyro-Scope', type: 'gyro' },
  { index: '94', name: 'Sparkle', type: 'spark' },
  { index: '95', name: 'Tally-5', type: 'tally' },
  { index: '96', name: 'Droplet', type: 'drip' },
  { index: '97', name: 'Kompass', type: 'compass' },
  { index: '98', name: 'Quad-Blink', type: 'cornerdots' },
  { index: '99', name: 'Omega-12', type: 'ticks' },
];
