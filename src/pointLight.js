import { PointLight } from "three";

function pointLight(scene) {
  const pointLight = new PointLight(0xffffff);
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;
  scene.add(pointLight);
  return pointLight;
}

export default pointLight;
