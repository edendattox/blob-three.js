import Gl from "./gl";
import Blob from "./gl/Blob";

import gsap from "gsap";

class App {
  constructor() {
    this.blobs = [];
    this.addBlobs();

    // Main animation tl
    this.tl = gsap.timeline({
      delay: 0.25,
    });

    this.tl.add(this.article()).add(this.animBlobs(), "-=1.5");
  }

  addBlobs() {
    // size, speed, color, freq, density, strength, offset
    // const blob1 = new Blob(1.75, 0.3, 0.5, 1.5, 0.12, Math.PI * 1);
    // const blob2 = new Blob(6.0, 0.15, 0.4, 2.0, 0.3, Math.PI * 2);
    const blob1 = new Blob(0.8, 0.5, 0.6, 2.0, 0.05, Math.PI * 0.5);

    blob1.position.set(0, 0, 15);

    // blob1.rotation.set(-0.4, 0, 0.5);

    this.blobs = [blob1];

    Gl.scene.add(...this.blobs);
  }

  animBlobs() {
    // Move Threejs Blobs
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
        ease: "power3.inOut",
      },
    });

    return tl;
  }
}

new App();
