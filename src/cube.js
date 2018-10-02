import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

function cube(scene) {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  return cube;
}

export default cube;
