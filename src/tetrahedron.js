import { TetrahedronGeometry, MeshBasicMaterial, Mesh } from "three";

function tetrahedron(scene) {
  const geometry = new TetrahedronGeometry(1, 1);
  const material = new MeshBasicMaterial({ color: 0xc6e2ff, wireframe: true });
  const tetrahedron = new Mesh(geometry, material);
  scene.add(tetrahedron);
  return tetrahedron;
}

export default tetrahedron;
