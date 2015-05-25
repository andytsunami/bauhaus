var canvas;
var ctx;

var images = [ // predefined array of used images
    'img/circulo.png',
];

var iActiveImage = 0;

$(document).ready(function(){

	$(".main").onepage_scroll({
	   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 900, // AnimationTime let you define how long each section takes to animate
	   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	});
    
    
    //Circulo cromatico
    var image = new Image();
    image.onload = function () {
        ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
    }
    image.src = images[iActiveImage];

    // creating canvas object
    canvas = document.getElementById('circuloCanva');
    ctx = canvas.getContext('2d');
    
    
    $('#circuloCanva').click(function(e) { // mouse move handler
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);

        var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;

        var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+", "+pixel[3]+")";
        var hexCor = +pixel[2]+256*+pixel[1]+65536 * +pixel[0];
        var hexa = hexCor.toString(16);
        
       // $('#fotoProfessor,#imagemCor').css('backgroundColor', pixelColor).text("#"+hexCor.toString(16));
        
        $('#fotoProfessor, #imagemCor').css('border-color',pixelColor);
        
        $('#imgProfessor, #imgCor').remove();
        
        $('#fotoProfessor').html('<img id="imgProfessor" src="img/cores/'+hexa+'-cima.jpg">');
        $('#imagemCor').html('<img id="imgCor" src="img/cores/'+hexa+'-baixo.jpg">');
        
        
    });
	
});

function init() {
	
	// start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
	
	$('body').removeClass("loading").addClass('loaded');
	
}

$(window).load(function() {
	
	// fade in page
	init();
	
});
