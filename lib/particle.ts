import { Vector2D } from "./draw2d";

export class Particle {
  position: Vector2D;
  velocity: Vector2D;
  radius: number;

  constructor(
    position: Vector2D,
    velocity: Vector2D = { x: 0, y: 0 },
    radius: number = 10
  ) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
  }
}
