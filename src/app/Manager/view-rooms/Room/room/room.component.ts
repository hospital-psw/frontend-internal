import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { Vector } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  constructor() {}

  @Input() renderer: any;
  @Input() scene: any;
  @Input() camera: any;

  ngOnInit(): void {
    this.addLight(-1, 2, 4, this.scene);
    this.addLight(1, -1, -2, this.scene);

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const d = 0.8;

    this.makeInstance(
      geometry,
      new THREE.Color().setHSL(0 / 8, 1, 0.5),
      -d,
      -d,
      -d,
      this.scene
    );

    const animate = () => {
      requestAnimationFrame(animate);

      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };
    animate();
  }

  addLight(x: number, y: number, z: number, scene: THREE.Scene): void {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(x, y, z);
    scene.add(light);
  }

  makeInstance(
    geometry: THREE.BoxGeometry,
    color: THREE.Color,
    x: number,
    y: number,
    z: number,
    scene: THREE.Scene
  ): THREE.Mesh {
    const material = new THREE.MeshPhongMaterial({
      color,
      opacity: 0.5,
      transparent: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.set(x, y, z);
    return cube;
  }
}
