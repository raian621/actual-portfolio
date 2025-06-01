export class Vector2D {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  static add(v1: Vector2D, v2: Vector2D): Vector2D {
    return new Vector2D(v1.x + v2.x, v1.y + v2.y);
  }

  static sub(v1: Vector2D, v2: Vector2D): Vector2D {
    return new Vector2D(v1.x - v2.x, v1.y - v2.y);
  }

  static scalarDistance(v1: Vector2D, v2: Vector2D): number {
    const x = v1.x - v2.x;
    const y = v1.y - v2.y;
    return Math.sqrt(x * x + y * y);
  }

  static withinDistance(v1: Vector2D, v2: Vector2D, dist: number): boolean {
    const x = v1.x - v2.x;
    const y = v1.y - v2.y;
    return x * x + y * y <= dist * dist;
  }

  static dot(v1: Vector2D, v2: Vector2D): number {
    return v1.x * v2.x + v1.y * v2.y;
  }

  static reflect(v1: Vector2D, v2: Vector2D): Vector2D {
    const nx = v2.x;
    const ny = v2.y;
    const dot2 = 2 * Vector2D.dot(v1, v2);
    return new Vector2D(v1.x - dot2 * v2.x, v1.y - dot2 * v2.y);
  }
}
