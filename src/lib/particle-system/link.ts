import type { Vector2D } from "./vector2d";

export class Link {
  from: Vector2D;
  to: Vector2D;
  strength: number;

  constructor(from: Vector2D, to: Vector2D, strength: number) {
    this.from = from;
    this.to = to;
    this.strength = strength;
  }
}
