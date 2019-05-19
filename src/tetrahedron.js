import { TetrahedronGeometry, MeshNormalMaterial, Mesh } from "three";

function tetrahedron(scene) {
  const geometry = new TetrahedronGeometry(1, 1);
  const material = new MeshNormalMaterial({ wireframe: true });
  const tetrahedron = new Mesh(geometry, material);
  scene.add(tetrahedron);
  return tetrahedron;
}

export default tetrahedron;
