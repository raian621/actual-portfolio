import { RGBA } from "./rgba";
import { Vector2D } from "./vector2d";

export class Particle {
  position: Vector2D;
  velocity: Vector2D;
  radius: number;
  id: number; // used to avoid recomputing lines
  color: RGBA;

  constructor(
    position: Vector2D,
    velocity: Vector2D = new Vector2D(0, 0),
    radius: number = 10,
    id: number = 0
  ) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.id = id;
    this.color = new RGBA(0, 0, 0, 1);
  }
}
