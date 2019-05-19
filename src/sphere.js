import { SphereGeometry, Mesh, MeshPhongMaterial } from "three";

const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

function sphere(scene) {
  const geometry = new SphereGeometry();
  const material = new MeshPhongMaterial({ color: 0x41B9E0 });
  const sphere = new Mesh(geometry, material);
  sphere.position.z = -50;
  scene.add(sphere);
  return sphere;
}

export default sphere;
