var scene, camera, renderer;

//var WIDTH  = window.innerWidth;
//var HEIGHT = window.innerHeight;

var WIDTH  = 800;
var HEIGHT = 600;


var SPEED = 0.01;

var mesh = null;

function init() {
    scene = new THREE.Scene();

    //initCube();
    initGolfinho();
    initCamera();
    initLights();
    initRenderer();


    document.body.appendChild(renderer.domElement);
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 1, 10);
    camera.position.set(0, 3.5, 5);
    camera.lookAt(scene.position);
}

function initRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
}

function initLights() {
    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
}

function initCube() {
    cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), new THREE.MeshNormalMaterial());
    scene.add(cube);
}

function rotateCube() {
    cube.rotation.x -= SPEED * 2;
    cube.rotation.y -= SPEED;
    cube.rotation.z -= SPEED * 3;
}

function render() {
    requestAnimationFrame(render);
    rotateGolfinho();
    //rotateCube();
  //  render.setClearColor();
    renderer.render(scene, camera);
}

function initGolfinho(){

    var materials = new THREE.MeshBasicMaterial( { color: 0xFFFF00, shading: THREE.FlatShading, wireframe: true, transparent: true } );
     var loader = new THREE.JSONLoader();
    loader.load('./mesh/golfinho.json', function(geometry, materials) {
        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.75;
        mesh.translation = THREE.GeometryUtils.center(geometry);
        scene.add(mesh);
    });
}

function rotateGolfinho() {
    if (!mesh) {
        return;
    }

    mesh.rotation.x -= SPEED * 2;
    mesh.rotation.y -= SPEED;
    mesh.rotation.z -= SPEED * 3;
}

init();
render();