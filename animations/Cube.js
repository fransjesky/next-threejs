import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box } from '@mui/material';
import { folder, useControls } from 'leva';
import gsap from 'gsap';

function Cube() {
  // variables init
  const [renderer, setRenderer] = useState(null);
  const canvas = useRef();
  const sizes = {
    height: window.innerHeight,
    width: window.innerWidth,
  };

  // debug UI
  const { positionX, positionY, positionZ, wireframe, visibility } =
    useControls({
      wireframe: { value: false, label: 'Wireframe' },
      visibility: { value: true, label: 'Visibility' },
      positions: folder({
        positionX: {
          value: 0,
          min: -4,
          max: 4,
          step: 0.01,
          label: 'Horizontal',
        },
        positionY: { value: 0, min: -2, max: 2, step: 0.01, label: 'Vertical' },
        positionZ: { value: 0, min: -1, max: 1, step: 0.01, label: 'Depth' },
      }),
    });

  // scene
  const scene = new THREE.Scene();

  // object
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial({ wireframe: wireframe });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = positionX;
  cube.position.y = positionY;
  cube.position.z = positionZ;
  cube.visible = visibility;
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
  }, [canvas]);

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
