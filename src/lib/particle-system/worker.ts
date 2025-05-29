import type { CanvasDimensions, CanvasPayload } from "./particle-system";

import { ParticleSystem } from "./particle-system";

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
