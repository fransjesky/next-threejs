import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box } from '@mui/material';

function Cube() {
  const [renderer, setRenderer] = useState(null);
  const canvas = useRef();
  const sizes = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  // scene
  const scene = new THREE.Scene();

  // object
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.01,
    1000
  );
  camera.position.z = 3;
  scene.add(camera);

  // controls
  const controls = renderer
    ? new OrbitControls(camera, renderer?.domElement)
    : null;
  controls ? (controls.enableDamping = true) : null;
  controls ? (controls.maxDistance = 10) : null;
  controls ? (controls.minDistance = 2) : null;

  // renderer
  useEffect(() => {
    setRenderer(
      new THREE.WebGLRenderer({
        canvas: canvas.current,
        antialias: true,
        alpha: true,
      })
    );
  }, []);

  renderer?.setSize(sizes.width, sizes.height);
  renderer?.render(scene, camera);

  // resize event
  window.addEventListener('resize', () => {
    sizes.height = window.innerHeight;
    sizes.width = window.innerWidth;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer?.setSize(sizes.width, sizes.height);
  });

  const tick = () => {
    // rotate cube animation
    cube.rotation.y += 0.01;

    // update controls
    controls ? controls.update() : null;

    // re-render
    renderer?.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();

  return <Box component='canvas' ref={canvas} />;
}

export default Cube;
