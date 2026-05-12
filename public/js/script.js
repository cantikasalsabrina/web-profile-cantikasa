// public/assets/js/script.js
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 1); 
scene.add(light);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const loader = new THREE.GLTFLoader();
// Jalur file tetap 'assets/models/...' karena dibaca dari posisi index.html
loader.load('assets/models/nama_file_kamu.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);
    
    function animate() {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01; 
        renderer.render(scene, camera);
    }
    animate();
}, undefined, function (error) {
    console.error('Ada yang salah nih, Sa:', error);
});

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});