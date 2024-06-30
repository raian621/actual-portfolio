const MAX_PARTICLES = 1000;

class ParticleSystem {
  canvas: OffscreenCanvas;
  context: OffscreenCanvasRenderingContext2D;
  density: number;
  height: number;
  maxSpeed: number;
  maxScreenSpeed: number;
  minLinkDistSquared: number;
  particles: Particle[];
  radius: number;
  wait: boolean;
  width: number;

  constructor(
    canvas: OffscreenCanvas,
    minLinkDistance: number = 80,
    maxSpeed: number = 0.00005,
    radius: number = 5,
    density: number = 0.008
  ) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d") as OffscreenCanvasRenderingContext2D;
    this.context.imageSmoothingEnabled = true;
    this.particles = new Array<Particle>();
    this.wait = false;
    this.maxSpeed = maxSpeed;
    this.maxScreenSpeed = maxSpeed * Math.min(canvas.width, canvas.height);
    this.minLinkDistSquared = minLinkDistance * minLinkDistance;
    this.density = density;
    this.radius = radius;
  }

  spawnParticles() {
    const particleCount = Math.min(
      MAX_PARTICLES,
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

      this.particles.push(
        new Particle(
          {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
          },
          velocity,
          this.radius
        )
      );
    }
  }

  update(delta: number) {
    this.particles.forEach((p) => {
      if (p.velocity.x > 0) {
        const collisionTime =
          (this.canvas.width - p.radius - p.position.x) / p.velocity.x;
        if (collisionTime >= 0 && collisionTime <= delta) {
          p.position.x += p.velocity.x * collisionTime;
          delta -= collisionTime;
          p.velocity.x *= -1;
        }
      } else if (p.velocity.x < 0) {
        const collisionTime = (p.radius - p.position.x) / p.velocity.x;
        if (collisionTime >= 0 && collisionTime <= delta) {
          p.position.x += p.velocity.x * collisionTime;
          delta -= collisionTime;
          p.velocity.x *= -1;
        }
      }

      if (p.velocity.y > 0) {
        const collisionTime =
          (this.canvas.height - p.radius - p.position.y) / p.velocity.y;
        if (collisionTime >= 0 && collisionTime <= delta) {
          p.position.y += p.velocity.y * collisionTime;
          delta -= collisionTime;
          p.velocity.y *= -1;
        }
      } else if (p.velocity.y < 0) {
        const collisionTime = (p.radius - p.position.y) / p.velocity.y;
        if (collisionTime >= 0 && collisionTime <= delta) {
          p.position.y += p.velocity.y * collisionTime;
          delta -= collisionTime;
          p.velocity.y *= -1;
        }
      }

      p.position.x += delta * p.velocity.x;
      p.position.y += delta * p.velocity.y;
    });

    this.particles.sort((a, b) => {
      if (a.position.x === b.position.x) {
        return a.position.y - a.position.y;
      }
      return a.position.x - a.position.x;
    });
  }

  render() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderLines();
    this.renderParticles();
  }

  renderParticles() {
    this.particles.forEach((p) => {
      this.context.beginPath();
      this.context.strokeStyle = "grey";
      this.context.fillStyle = `hsl(${
        p.position.y / this.canvas.height
      }turn, 100%, 50%)`;
      this.context.arc(p.position.x, p.position.y, p.radius, 0, 2 * Math.PI);
      this.context.stroke();
      this.context.fill();
    });
  }

  renderLines() {
    this.particles.forEach((u) => {
      this.particles
        .filter((v) => {
          if (v == u) return false;

          const { x: ux, y: uy } = u.position;
          const { x: vx, y: vy } = v.position;
          const dx = ux - vx;
          const dy = uy - vy;

          return dx * dx + dy * dy < this.minLinkDistSquared;
        })
        .forEach((v) => {
          const { x: ux, y: uy } = u.position;
          const { x: vx, y: vy } = v.position;
          const dx = ux - vx;
          const dy = uy - vy;

          const strength =
            (this.minLinkDistSquared - (dx * dx + dy * dy)) /
            this.minLinkDistSquared;
          this.context.strokeStyle = `hsl(100, 0%, 50%, ${strength})`;
          this.context.beginPath();
          this.context.moveTo(u.position.x, u.position.y);
          this.context.lineTo(v.position.x, v.position.y);
          this.context.stroke();
        });
    });
  }

  async renderLoop() {
    const maxFrameRate = 360;
    const frameInterval = 1000 / maxFrameRate;

    let start = Date.now();
    for (;;) {
      const delta = Date.now() - start;
      if (!this.wait) {
        ps.update(delta);
        ps.render();
      }
      start = Date.now();
      await new Promise((_) =>
        setTimeout(_, Math.max(frameInterval - delta, 0))
      );
    }
  }

  resize(width: number, height: number) {
    this.wait = true;

    this.canvas.width = width;
    this.canvas.height = height;

    this.particles = this.particles.filter((p) => {
      if (p.position.x >= width) return false;
      if (p.position.y >= height) return false;

      return true;
    });

    this.width = Math.max(this.width, width);
    this.height = Math.max(this.height, height);
    const currParticleCount = this.density * this.width * this.height;
    if (this.particles.length > currParticleCount) {
      this.particles = this.particles.slice(0, currParticleCount);
    }
    let wantParticleCount = this.density * width * height - currParticleCount;
    const leftVolume = (width - this.width) * height;
    const bottomVolume = (height - this.height) * width;
    const cornerVolume = (width - this.width) * (height - this.height);
    const newVolume = leftVolume + bottomVolume + cornerVolume;

    // fill new corner space
    if (leftVolume > 0) {
      const proportion = leftVolume / newVolume;
      let particlesToAdd = Math.ceil(proportion * wantParticleCount);
      wantParticleCount -= particlesToAdd;

      while (particlesToAdd > 0) {
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

        this.particles.push(
          new Particle(
            {
              x: this.width + Math.random() * (width - this.width),
              y: Math.random() * this.canvas.height,
            },
            velocity,
            this.radius
          )
        );
        particlesToAdd--;
      }
    }
    // fill new right space
    if (this.width < width) {
    }
    // fill new bottom space
    if (this.height < height) {
    }

    this.width = width;
    this.height = height;

    this.wait = false;
  }
}

type Vector2D = {
  x: number;
  y: number;
};

class Particle {
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

type CanvasDimensions = {
  width: number;
  height: number;
};

type CanvasPayload = {
  canvas: OffscreenCanvas;
};

type ParticleSystemPayload = {
  payloadType: "dimensions" | "canvas";
  payload: CanvasDimensions | CanvasPayload;
};

var ps: ParticleSystem;

onmessage = (evt: MessageEvent<ParticleSystemPayload>) => {
  const { payloadType } = evt.data;

  if (payloadType === "dimensions") {
    const { width, height } = evt.data.payload as CanvasDimensions;
    ps.resize(width, height);
  } else if (payloadType === "canvas") {
    ps = new ParticleSystem(evt.data.payload as OffscreenCanvas);
    ps.spawnParticles();
    ps.renderLoop();
  }
};
