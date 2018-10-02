function animate(scene, camera, renderer, cb) {
  function animate() {
    requestAnimationFrame(animate);
    cb();
    renderer.render(scene, camera);
  }
  animate();
}

export default animate;
