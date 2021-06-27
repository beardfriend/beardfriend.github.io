import * as THREE from 'three';

import atmosphereFragment from './shaders/atmosphereFragment.glsl';
import atmosphereVertexShader from './shaders/atmosphere.glsl';
import fragment from './shaders/fragment.glsl';
import globe from '../images/globe.jpg';
import gsap from 'gsap';
import vertexShader from './shaders/vertex.glsl';

export default function Earth(ref, state) {
  //Canvas

  const canvas = document.querySelector('canvas.webgl');

  // Scene
  const scene = new THREE.Scene();

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  // Object

  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.35,
    // map: new THREE.TextureLoader().load(star),
    sizeAttenuation: true
  });

  const starVertices = [];
  function addStars() {
    let i = 0;
    while (i < 10000) {
      const x = (Math.random() - 0.5) * 2000;

      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 3000;
      if (!sameNum(x) && !sameNum(y) && !sameNum(z)) {
        starVertices.push(x, y, z);
        i++;
      }
    }

    function sameNum(n) {
      for (let i = 0; i < starVertices.length; i++) {
        if (n === starVertices[i]) {
          return true;
        }
        return false;
      }
    }
  }
  addStars();

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

  const stars = new THREE.Points(starGeometry, starMaterial);

  //MESH
  const atmosphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragment,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    })
  );

  atmosphere.scale.set(1.1, 1.1, 1.1);

  const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(5, 50, 50),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: fragment,
      uniforms: {
        globeTexture: {
          value: new THREE.TextureLoader().load(globe)
        }
      }
    })
    // new THREE.MeshBasicMaterial({
    //   // color: 0xff0000,
    //   map: new THREE.TextureLoader().load(globe),
    // })
  );

  //

  const group = new THREE.Group();
  group.add(atmosphere);
  group.add(sphere);
  scene.add(stars);
  scene.add(group);

  // Size
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });

  renderer.setSize(sizes.width - ref.current.offsetWidth, ref.current.offsetHeight);
  const handleResize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width - ref.current.offsetWidth, ref.current.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  window.addEventListener('resize', handleResize);

  //REnder

  // Camera

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 15;
  scene.add(camera);

  // Animate

  const mouse = {
    x: undefined,
    y: undefined
  };

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere.rotation.y += 0.004;
    group.rotation.y = mouse.x * 0.5;
    gsap.to(group.rotation, {
      x: -mouse.y * 0.5,
      y: mouse.x * 0.5,
      duration: 2
    });
  }
  animate();

  function move(event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;
  }
  console.log(scene);
  window.addEventListener('mousemove', move);

  return () => {
    cancelAnimationFrame(animate);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('mousemove', move);
    scene.remove(camera);
    scene.remove(stars);
    scene.remove(sphere);
    scene.remove(atmosphere);
    scene.remove(group);
  };
}

const manager = new THREE.LoadingManager(Earth);

manager.onLoad = function () {
  console.log('finishj');
};
