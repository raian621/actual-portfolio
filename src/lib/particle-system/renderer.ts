import { Renderer } from "astro/runtime/server/index.js";
import type { Link } from "./link";
import type { Particle } from "./particle";
import { RGBA } from "./rgba";
import type { Vector2D } from "./vector2d";

export interface Renderer {
  drawLines(links: Link[]): void;
  drawParticles(particles: Particle[]): void;
  clear(): void;
  resize(width: number, height: number): void;
}

export class CanvasRenderer implements Renderer {
  ctx: OffscreenCanvasRenderingContext2D;
  lineThickness: number;
  strokeStyle: RGBA;
  width: number;
  height: number;

  constructor(canvas: OffscreenCanvas) {
    this.ctx = canvas.getContext("2d")!;
    this.ctx.imageSmoothingEnabled = true;
    this.lineThickness = 2;
    this.strokeStyle = new RGBA(128, 128, 128, 1.0);
    this.width = canvas.width;
    this.height = canvas.height;
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  _drawLine(from: Vector2D, to: Vector2D, strength: number) {
    this.strokeStyle.a = strength;
    this.ctx.strokeStyle = this.strokeStyle.toString();
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  }

  drawLines(links: Link[]) {
    this.ctx.lineWidth = this.lineThickness;
    links.forEach(({ from, to, strength }) => {
      this._drawLine(from, to, strength);
    });
  }

  _drawParticle(p: Particle) {
    this.ctx.beginPath();
    this.ctx.fillStyle = p.color.toString();
    this.ctx.arc(p.position.x, p.position.y, p.radius, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawParticles(particles: Particle[]): void {
    particles.forEach((p) => this._drawParticle(p));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
