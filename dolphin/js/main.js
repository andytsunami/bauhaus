//Exemplo
//http://www.jonathan-petitcolas.com/2015/07/27/importing-blender-modelized-mesh-in-threejs.html

//https://github.com/mrdoob/three.js/issues/6050 - Exportar animado do Blender
var scene, camera, renderer;

var WIDTH  = (window.innerWidth * 90) / 100;
var HEIGHT = (window.innerHeight * 100) / 100;
var mixer;


console.log("WIDTH - " + WIDTH);
console.log("HEIGHT - " + HEIGHT);



var SPEED = 0.01;

var mesh = null;
var venusArray = [];

var animation, gui;
var bLoader;
var clock = new THREE.Clock();

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
    rotateVenus();
    //rotateCube();
    //render.setClearColor();
    renderer.render(scene, camera);


}

function initGolfinho(){

     var loader = new THREE.JSONLoader();
    //loader.load('./mesh/golfinho.json', function(geometry, materials) {
/*
for (var i = 0; i <= 1; i++) {
    console.log("Venus - " + i);
        loader.load('./mesh/venus.json', function(geometry, materials) {

            if ( materials ) {
                for ( var k=0,l=materials.length; k < l; k++ ) {
                    if(k % 2 == 0){
                    //Corpo do Golfinho
                    var hex = Math.random().toString(16).slice(2, 8);
                    materials[k].color.setHex( "0x"+hex);
                } else {
                    //No Golfinho, isso é o olho
                    materials[k].color.setHex( 0xBCFFE7 );
                }
                }
            } else {
                alert("Isso é uma excessão!");
                objects[i].children[j].material.color.setHex( 0x1A75FF );
            }

            var venus = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
            //mesh.scale.x = mesh.scale.y = mesh.scale.z = 1.75;
           // venus.scale.x = venus.scale.y = venus.scale.z = 0.75;
            venus.scale.x = venus.scale.y = venus.scale.z = Math.random() * 2 + 1;

                      
            venus.translation = geometry.center();
            
            
            scene.add(venus);
            venusArray.push(venus);
        });
    }
*/
    mixer = new THREE.AnimationMixer(scene);
    loader.load('./mesh/flamingo.js', function(geometry, materials) {

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
        mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.03;
        mesh.translation = geometry.center();
        
        mixer.clipAction( geometry.animations[0], mesh )
                                .setDuration( 1 )           // one second
                                .startAt( - Math.random() ) // random phase (already running)
                                .play();    


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

  //  console.log("Golfinho X - " + mesh.position.x);

}

function rotateVenus(){
    var timer = 0.0001 * Date.now();
    
    for ( var i = 0, il = venusArray.length; i < il; i ++ ) {

        var ven = venusArray[i];
        var direcao;

        if(ven.position.x == 0 || ven.position.x >= window.innerWidth){
            direcao = -1;
            console.log("dentro");
        } else {
            direcao = +1;
            console.log("fora");
        }

        ven.position.x -= (SPEED * Math.cos( timer + i )) * direcao;
        ven.position.y -= (SPEED * Math.sin( timer + i * 1.1 )) * direcao;
        ven.position.z -= (SPEED * Math.cos( timer + i )) * direcao;

        //ven.position.x -= i * 2;
       // ven.position.y -= SPEED;
        //ven.position.z -= i * 2;

        //venus.position.y = 30;

    }
}

function animate() {

                requestAnimationFrame( animate );

                var delta = clock.getDelta();

                // animate Collada model

                THREE.AnimationHandler.update( delta );

                mixer.update( delta );


                render();
                stats.update();

}

init();
render();
animate();