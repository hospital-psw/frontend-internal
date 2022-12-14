import * as THREE from 'three';
import { Vector, Vector2 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CameraBuilder {
  private camera: THREE.PerspectiveCamera;
  private readonly fov = 75;
  private readonly aspect = 2; // the canvas default
  private readonly near = 0.1;
  private readonly far = 25;
  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    this.camera.position.z = 10;
  }

  getCamera() {
    return this.camera;
  }
}
