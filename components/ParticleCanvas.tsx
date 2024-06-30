"use client";

import { createRef, useEffect, useRef } from "react";

export default function ParticleCanvas() {
  const canvasRef = createRef<HTMLCanvasElement>();
  const initialized = useRef(false);

  useEffect(() => {
    if (!canvasRef.current || initialized.current) {
      return;
    }
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    const worker = new Worker(
      new URL("@/lib/particle-system.ts", import.meta.url)
    );
    const offscreen = canvasRef.current.transferControlToOffscreen();
    worker.postMessage({ payloadType: "canvas", payload: offscreen }, [
      offscreen,
    ]);

    initialized.current = true;

    window.addEventListener("resize", () => {
      worker.postMessage(
        {
          payloadType: "dimensions",
          payload: { width: window.innerWidth, height: window.innerHeight },
        },
        []
      );
    });
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="w-[100vdw] h-[100vdh] fixed p-0 m-0 top-0 left-0 -z-10"
    />
  );
}
