import { Scene, PerspectiveCamera, WebGLRenderer } from "three";
import cube from "./cube";
import tetrahedron from "./tetrahedron";
import animate from "./animate";
import sphere from "./sphere";
import pointLight from "./pointLight";

const VIEW_ANGLE = 45;
const ASPECT = window.innerWidth / window.innerHeight;
const NEAR = 0.1;
const FAR = 10000;

const scene = new Scene();
const camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
const renderer = new WebGLRenderer();

camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const shape = tetrahedron(scene);
// const shape2 = tetrahedron(scene);
// const shape3 = sphere(scene);
const light = pointLight(scene);

const spheres = [];

for (let i = 0; i < 20; i++) {
  const _sphere = cube(scene);
  _sphere.position.x = Math.random() * 4 * (Math.random() > 0.5 ? -1 : 1);
  _sphere.position.y = Math.random() * 4 * (Math.random() > 0.5 ? -1 : 1);
  _sphere.speedX = _sphere.position.y * 0.005;
  _sphere.speedY = _sphere.position.x * -0.002;

  spheres.push(_sphere);
}

// animate(scene, camera, renderer);

// shape.position.z = -50;
// shape3.position.x = -15
// shape3.position.y = 15;

let gravity = 0.01;

animate(scene, camera, renderer, () => {
  // shape.rotation.x += 0.05;
  // shape.rotation.y += 0.02;
  // shape2.rotation.x += 0.01;
  // shape2.rotation.y += 0.01;
  // if (shape3.position.x < 0) {
  //   speedX += gravity;
  // } else {
  //   speedX -= gravity;
  // }

  // if (shape3.position.y < 0) {
  //   speedY += gravity;
  // } else {
  //   speedY -= gravity;
  // }

  // shape3.position.x += speedX;
  // shape3.position.y += speedY;

  spheres.forEach(sphere => {
    if (sphere.position.x < 0) {
      sphere.speedX += gravity;
    } else {
      sphere.speedX -= gravity;
    }

    if (sphere.position.y < 0) {
      sphere.speedY += gravity;
    } else {
      sphere.speedY -= gravity;
    }

    sphere.position.x += sphere.speedX;
    sphere.position.y += sphere.speedY;
  });
});
