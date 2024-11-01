
import * as THREE from 'three';

// Configuration de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 250 / 370, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(250, 370);
document.getElementById('carte').appendChild(renderer.domElement);

// Création de la carte (plane geometry)
const geometry = new THREE.PlaneGeometry(2.5, 3.7);
const textureLoader = new THREE.TextureLoader();

// Chargement de la texture en spirale
const texture = textureLoader.load('path/to/your/vortex_texture.jpg', () => {
    animate(); // Démarre l'animation une fois la texture chargée
});
const material = new THREE.MeshBasicMaterial({ map: texture });
const card = new THREE.Mesh(geometry, material);
scene.add(card);

// Positionne la caméra
camera.position.z = 5;

// Animation pour créer l’effet de rotation du vortex
function animate() {
    requestAnimationFrame(animate);
    texture.offset.x += 0.01; // Ajuste la vitesse et la direction du mouvement
    renderer.render(scene, camera);
}
