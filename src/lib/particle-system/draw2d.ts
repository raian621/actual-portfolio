import type { Vector2D } from "./vector2d";

export function drawLine(
  ctx: OffscreenCanvasRenderingContext2D,
  from: Vector2D,
  to: Vector2D,
  strokeStyle: string | CanvasGradient | CanvasPattern,
  thickness: number = 1
) {
  ctx.lineWidth = thickness;
  ctx.strokeStyle = strokeStyle;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
}
