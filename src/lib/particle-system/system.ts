import { CanvasRenderer, type Renderer } from "./renderer";
import { Link } from "./link";
import { Particle } from "./particle";
import { QuadTree } from "./quadtree";
import { Rectangle } from "./rectangle";
import { RGBA } from "./rgba";

export class ParticleSystem {
  canvas: OffscreenCanvas;
  density: number;
  height: number;
  maxSpeed: number;
  maxScreenSpeed: number;
  minLinkDistSquared: number;
  minLinkDist: number;
  particles: Particle[];
  radius: number;
  wait: boolean;
  width: number;
  maxParticles: number;
  renderer: Renderer;

  constructor(
    canvas: OffscreenCanvas,
    maxParticles: number = 10000,
    minLinkDistance: number = 200,
    maxSpeed: number = 0.02,
    radius: number = 5,
    density: number = 0.003
  ) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.particles = new Array<Particle>();
    this.maxSpeed = maxSpeed;
    this.maxScreenSpeed = maxSpeed * Math.min(canvas.width, canvas.height);
    this.minLinkDistSquared = minLinkDistance * minLinkDistance;
    this.minLinkDist = minLinkDistance;
    this.density = density;
    this.radius = radius;
    this.wait = false;
    this.maxParticles = maxParticles;
    // this.renderer = new WebGlRenderer(this.canvas);
    this.renderer = new CanvasRenderer(this.canvas);
  }

  spawnParticles() {
    const particleCount = Math.min(
      this.maxParticles,
      (this.density * (this.canvas.width * this.canvas.height)) /
        (this.radius * this.radius)
    );

    for (let i = 0; i < particleCount; i++) {
      const velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
      };
      const magnitude = Math.sqrt(
        velocity.x * velocity.x + velocity.y * velocity.y
      );
      velocity.x /= magnitude;
      velocity.y /= magnitude;
      velocity.x *= this.maxScreenSpeed * Math.random();
      velocity.y *= this.maxScreenSpeed * Math.random();

      const particle = new Particle(
        {
          x: this.radius / 2 + Math.random() * (this.width - this.radius),
          y: this.radius / 2 + Math.random() * (this.height - this.radius),
        },
        velocity,
        this.radius,
        i
      );

      this.particles.push(particle);
    }
  }

  update(delta: number) {
    this.particles.forEach((p) => {
      let bounces = 4;

      for (;;) {
        let wallCollision = -1;
        let minCollisionTime = delta;

        if (p.velocity.x > 0) {
          let collisionTime =
            (this.width - p.radius - p.position.x) / p.velocity.x;
          if (collisionTime >= 0 && collisionTime <= minCollisionTime) {
            minCollisionTime = collisionTime;
            wallCollision = 0;
          }
        } else if (p.velocity.x < 0) {
          const collisionTime = (p.radius - p.position.x) / p.velocity.x;
          if (collisionTime >= 0 && collisionTime <= minCollisionTime) {
            minCollisionTime = collisionTime;
            wallCollision = 1;
          }
        }

        if (p.velocity.y > 0) {
          const collisionTime =
            (this.height - p.radius - p.position.y) / p.velocity.y;
          if (collisionTime >= 0 && collisionTime <= minCollisionTime) {
            minCollisionTime = collisionTime;
            wallCollision = 2;
          }
        } else if (p.velocity.y < 0) {
          const collisionTime = (p.radius - p.position.y) / p.velocity.y;
          if (collisionTime >= 0 && collisionTime <= minCollisionTime) {
            minCollisionTime = collisionTime;
            wallCollision = 3;
          }
        }

        switch (wallCollision) {
          case 0:
            p.position.x += p.velocity.x * minCollisionTime;
            delta -= minCollisionTime;
            p.velocity.x *= -1;
            break;
          case 1:
            p.position.x += p.velocity.x * minCollisionTime;
            delta -= minCollisionTime;
            p.velocity.x *= -1;
            break;
          case 2:
            p.position.y += p.velocity.y * minCollisionTime;
            delta -= minCollisionTime;
            p.velocity.y *= -1;
            break;
          case 3:
            p.position.y += p.velocity.y * minCollisionTime;
            delta -= minCollisionTime;
            p.velocity.y *= -1;
            break;
          default:
            p.position.x += delta * p.velocity.x;
            p.position.y += delta * p.velocity.y;
        }

        if (wallCollision === -1) {
          break;
        }

        bounces--;
        if (bounces == 0) break;
      }

      // hard coded rectanglular incarceration. I'm so done with collision logic.
      if (p.position.x < 0) p.position.x = 0;
      if (p.position.y < 0) p.position.y = 0;
      if (p.position.x >= this.width) p.position.x = this.width - 1;
      if (p.position.y >= this.height) p.position.y = this.height - 1;

      p.color = RGBA.fromHSLA(p.position.y / this.height, 1.0, 0.5, 1.0);
    });
  }

  render() {
    this.renderer.clear();
    this.renderLines();
    this.renderParticles();
  }

  renderParticles() {
    this.renderer.drawParticles(this.particles);
  }

  renderLines() {
    const qt = new QuadTree(new Rectangle(0, 0, this.width, this.height), 20);
    this.particles.forEach((p) => qt.insert(p));
    const links: Link[] = this.particles
      .map((p: Particle) => {
        const neighbors = qt.queryCircle(p.position, this.minLinkDist);
        return neighbors
          .filter((neighbor) => neighbor.id > p.id)
          .map((neighbor) => {
            const dx = Math.abs(p.position.x - neighbor.position.x);
            const dy = Math.abs(p.position.y - neighbor.position.y);
            const strength =
              (this.minLinkDistSquared - (dx * dx + dy * dy)) /
              this.minLinkDistSquared;
            return new Link(p.position, neighbor.position, strength);
          });
      })
      .reduce((links, chunk) => links.concat(chunk));
    this.renderer.drawLines(links);
  }

  async renderLoop() {
    const maxFrameRate = 360;
    const frameInterval = 1000 / maxFrameRate;

    let start = Date.now();
    for (;;) {
      const delta = (Date.now() - start) / 1000;
      start = Date.now();
      if (!this.wait) {
        this.update(delta);
        this.render();
      }

      await new Promise((_) =>
        setTimeout(_, Math.max(frameInterval - delta, 0))
      );
    }
  }

  resize(width: number, height: number) {
    this.wait = true;
    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer.resize(width, height);

    this.particles = this.particles.filter((p) => {
      if (p.position.x >= width) return false;
      if (p.position.y >= height) return false;
      return true;
    });

    this.width = width;
    this.height = height;
    this.wait = false;
  }
}

export type CanvasDimensions = {
  width: number;
  height: number;
};

export type CanvasPayload = {
  canvas: OffscreenCanvas;
};
