import WorkerScript from "./worker.ts?worker";

function startParticleSystem() {
  const canvasElement =
    document.querySelector<HTMLCanvasElement>("#particle-canvas");
  if (!canvasElement) {
    console.error("Could not find canvas element!");
    return;
  }
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  const offscreen = canvasElement.transferControlToOffscreen();
  const worker = new WorkerScript();
  worker.postMessage({ payloadType: "canvas", payload: offscreen }, [
    offscreen,
  ]);
  window.addEventListener("resize", () => {
    worker.postMessage(
      {
        payloadType: "dimensions",
        payload: { width: window.innerWidth, height: window.innerHeight },
      },
      []
    );
  });
}

startParticleSystem();
