import { Vector2D } from "./vector2d";

export function pointInCircle(
  point: Vector2D,
  position: Vector2D,
  radius: number
): boolean {
  const diff = Vector2D.sub(point, position);
  const dist2 = Vector2D.dot(diff, diff);
  return dist2 <= radius * radius;
}
