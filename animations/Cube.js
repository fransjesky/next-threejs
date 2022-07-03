import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Box } from '@mui/material';
import * as dat from 'dat.gui';
import gsap from 'gsap';

const gui = new dat.GUI();

function Cube() {
  // variables init
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
  }, [canvas]);

  renderer?.setSize(sizes.width, sizes.height);
  renderer?.render(scene, camera);

  // object params
  const objectParams = {
    spinY: () => {
      gsap.to(cube.rotation, {
        duration: 1,
        y: cube.rotation.y + Math.PI * 2,
      });
    },
    spinX: () => {
      gsap.to(cube.rotation, {
        duration: 1,
        x: cube.rotation.x + Math.PI * 2,
      });
    },
  };

  // debug UI
  useEffect(() => {
    if (renderer) {
      gui
        .add(cube.position, 'x')
        .min(-4)
        .max(4)
        .step(0.1)
        .name('Position X Axis');
      gui
        .add(cube.position, 'y')
        .min(-2)
        .max(2)
        .step(0.1)
        .name('Position Y Axis');
      gui
        .add(cube.position, 'z')
        .min(-1)
        .max(1)
        .step(0.1)
        .name('Position Z Axis');
      gui.add(cube, 'visible').name('Visibility');
      gui.add(material, 'wireframe').name('Wireframe');
      gui.add(objectParams, 'spinY').name('Horizontal Spin');
      gui.add(objectParams, 'spinX').name('Vertical Spin');
    }
  }, [renderer]);

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
