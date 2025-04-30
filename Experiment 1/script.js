import * as Three from 'three';

// Creates a scene
const scene = new Three.Scene();

// Creates a camera
const camera = new Three.PerspectiveCamera( 75, 
    window.innerWidth / window.innerHeight, 0.1, 1000
);

// Creates a renderer
const renderer = new Three.WebGLRenderer();

// Sets the size to render the app
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);

// Creates a boxgeometry for the cube
const geometry = new Three.BoxGeometry( 1, 1, 1 );

// Creates a material to apply on the cube
const material = new Three.MeshBasicMaterial( {
    color: 'yellow'
});

// Creates the cube
const cube = new Three.Mesh( geometry, material );

// Insert the cube into the scene
scene.add( cube );

// Set camera farther out enough to see cube
camera.position.z = 5;

// Render the scene
renderer.render(scene, camera);