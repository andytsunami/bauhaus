//Exemplo
//http://www.jonathan-petitcolas.com/2015/07/27/importing-blender-modelized-mesh-in-threejs.html
var scene, camera, renderer;

var WIDTH  = (window.innerWidth * 90) / 100;
var HEIGHT = (window.innerHeight * 100) / 100;

console.log("WIDTH - " + WIDTH);
console.log("HEIGHT - " + HEIGHT);

//var WIDTH  = 800;
//var HEIGHT = 600;


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

     var loader = new THREE.JSONLoader();
    loader.load('./mesh/golfinho.json', function(geometry, materials) {

        if ( materials ) {
            for ( var k=0,l=materials.length; k < l; k++ ) {
                if(k % 2 == 0){
                //Corpo do Golfinho
                materials[k].color.setHex( 0xFDF4BA );
            } else {
                //No Golfinho, isso é o olho
                materials[k].color.setHex( 0xBCFFE7 );
            }
            }
        } else {
            alert("Isso é uma excessão!");
            objects[i].children[j].material.color.setHex( 0x1A75FF );
        }

        mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
        //mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.75;
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.75;
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