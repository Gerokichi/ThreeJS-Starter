import '/style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var camera, scene, renderer, controls;
var geometry, material, cube1, cube2, cube3, plane, sphere;

init();
render();

function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas1').appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera.lookAt(scene.position);
    addObjects();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = false;
    controls.update();
}

function render() {
    requestAnimationFrame(render);
    sphere.rotation.y += 0.001;

    cube1.rotation.y += 0.02;
    cube1.rotation.x += 0.02;

    cube3.rotation.z += 0.02;
    cube3.rotation.x += 0.02;
    renderer.render(scene, camera);
    controls.update();
}

function addObjects(){
    var geometryPlane = new THREE.PlaneGeometry( 10, 10, 4, 4 );
    var materialPlane = new THREE.MeshBasicMaterial( {color: 0x747570, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometryPlane, materialPlane );
    plane.position.set(0, -0.5, 0);
    plane.rotation.x = Math.PI / 2;
    scene.add( plane );

    // var geometryCube = new THREE.BoxGeometry(1, 1, 1);
    // var cubeTexture = new THREE.TextureLoader().load('/texture/box.jpg');
    // cubeTexture.colorSpace = THREE.SRGBColorSpace;
    // var materialCube = new THREE.MeshBasicMaterial({map: cubeTexture});
    // cube1 = new THREE.Mesh(geometryCube, materialCube);
    // cube1.position.set(0, 0, 0);
    // scene.add(cube1);

    // var geometryOpacityBox = new THREE.BoxGeometry( 1, 1, 1 );
    // var materialOpacityBox = new THREE.MeshBasicMaterial( {color: 0xEAF913, transparent: true, opacity: 0.5} );
    // cube2 = new THREE.Mesh(geometryOpacityBox,materialOpacityBox);
    // cube2.position.set(1.5, 0, 0);
    // scene.add( cube2 );

    var geometryWiredBox = new THREE.BoxGeometry( 1, 1, 1 );
    var materialWiredBox = new THREE.MeshBasicMaterial({color: 'rgb(255,0,0)', wireframe: true, transparent: true});
    cube3 = new THREE.Mesh( geometryWiredBox, materialWiredBox );
    cube3.position.set(-1.5, 1, 0);
    scene.add( cube3 );
    


    var geometrySphere = new THREE.SphereGeometry(100, 100, 100);
    var skyTexture = new THREE.TextureLoader().load('/texture/sky.jpg');
    skyTexture.colorSpace = THREE.SRGBColorSpace;
    var materialSphere = new THREE.MeshBasicMaterial({map: skyTexture, transparent: true, side: THREE.DoubleSide});
    sphere = new THREE.Mesh(geometrySphere, materialSphere);
    sphere.position.set(0, 0, 0);
    scene.add(sphere);

    var geometryDopCube = new THREE.BoxGeometry(1, 1, 1);
    var cubeTexture = new THREE.TextureLoader().load('/texture/lirkis.jpg');
    cubeTexture.colorSpace = THREE.SRGBColorSpace;
    var materialDopCube = new THREE.MeshBasicMaterial({map: cubeTexture});
    cube1 = new THREE.Mesh(geometryDopCube, materialDopCube);
    cube1.position.set(0, 1, 0);
    scene.add(cube1);

    cube1.add(cube3);

    var geometryOctahedron =  new THREE.OctahedronGeometry(0.85);
    var materialWiredOctahedron = new THREE.MeshBasicMaterial({color: 'rgb(255,0,0)', wireframe: true, transparent: true});
    cube3 = new THREE.Mesh( geometryOctahedron, materialWiredOctahedron);
    cube3.position.set(-1.5, 1, 0);
    scene.add( cube3 );
}

