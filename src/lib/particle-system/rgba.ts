export class RGBA {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r | 0;
    this.g = g | 0;
    this.b = b | 0;
    this.a = a;
  }

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  static fromHSLA(h: number, s: number, l: number, a: number) {
    if (s === 0) {
      return new RGBA(l, l, l, a);
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return new RGBA(
      255 * hueToRgb(p, q, h + 1.0 / 3.0),
      255 * hueToRgb(p, q, h),
      255 * hueToRgb(p, q, h - 1.0 / 3.0),
      a
    );
  }
}

function hueToRgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
