import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.width = '100%';
renderer.domElement.style.height = '100%';
document.body.appendChild(renderer.domElement);

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// Create the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Postion the camera
camera.position.set(0, 2, 5);

const orbit = new OrbitControls(camera, renderer.domElement);

// Create an AxesHelper and add it to the scene
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Set camera position and update based on movement
camera.position.set(0, 2, 5);
orbit.update();


// Adjust Camera and Render based on the size of the window
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();


