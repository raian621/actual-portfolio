import type { Vector2D } from "./vector2d";

export const TOP_LEFT_SUBDIVISION = 0;
export const TOP_RIGHT_SUBDIVISION = 1;
export const BOTTOM_RIGHT_SUBDIVISION = 2;
export const BOTTOM_LEFT_SUBDIVISION = 3;

export class Rectangle {
  x: number;
  y: number;
  w: number;
  h: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  toString() {
    return `(x: ${this.x}, y: ${this.y}, w: ${this.w}, h: ${this.h})`;
  }

  static pointInside(rect: Rectangle, v: Vector2D): boolean {
    return (
      v.x >= rect.x &&
      v.x < rect.x + rect.w &&
      v.y >= rect.y &&
      v.y < rect.y + rect.h
    );
  }

  static subdivide(rect: Rectangle): Rectangle[] {
    const halfWidth = rect.w / 2;
    const halfHeight = rect.h / 2;
    const x1 = rect.x;
    const y1 = rect.y;
    const x2 = x1 + halfWidth;
    const y2 = y1 + halfHeight;
    return [
      new Rectangle(x1, y1, halfWidth, halfHeight),
      new Rectangle(x2, y1, halfWidth, halfHeight),
      new Rectangle(x2, y2, halfWidth, halfHeight),
      new Rectangle(x1, y2, halfWidth, halfHeight),
    ];
  }

  static intersect(rect1: Rectangle, rect2: Rectangle): boolean {
    return (
      rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.y + rect1.h > rect2.y
    );
  }
}
