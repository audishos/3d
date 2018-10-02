import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import cube from "./cube";
import tetrahedron from './tetrahedron';
import animate from "./animate";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
const shape = tetrahedron(scene);
const shape2 = tetrahedron(scene);
animate(scene, camera, renderer, () => {
  shape.rotation.x += 0.05;
  shape.rotation.y += 0.02;
  shape2.rotation.x += 0.01;
  shape2.rotation.y += 0.01;
});
