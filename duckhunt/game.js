// Your work goes here...
function draw(){
	var canvas = document.getElementById("game");
	var ctx = canvas.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.onload = function() {
		drawLandscape(ctx,spriteSheet);
		drawDog(ctx,spriteSheet);
		drawBirds(ctx,spriteSheet);
	}; 
	spriteSheet.src = "assets/duckhunt.png";
};

function drawLandscape(ctx,spriteSheet){
	//draw tree
	ctx.drawImage(spriteSheet,
		  0, 268,
		 82, 126,
		154, 236,
		164, 252);
	//draw grass, road, and bushes
	ctx.drawImage(spriteSheet, 
		  0, 712, 
		900, 188, 
		  0, 412, 
		900, 188);
};

function drawDog(ctx,spriteSheet){
	console.log("HELLO");
	//draw dog sniffing road
		ctx.drawImage(spriteSheet, 
			 60,   0, 
			 60,  46, 
		 	184, 480, 
			120,  92);
};

function drawBirds(ctx,spriteSheet){
	//draw bird 1
	ctx.drawImage(spriteSheet, 
		124, 120, 
		 40,  30, 
	 	484, 200, 
		 80,  60);
	//draw bird 2
	ctx.drawImage(spriteSheet, 
		300, 156, 
		 36,  36, 
 	 	100, 120, 
		 72,  72);
	//draw bird 3
	ctx.drawImage(spriteSheet, 
		296, 196, 
		 36,  36, 
	 	384, 340, 
		 72,  72);
	//draw bird 4
	ctx.drawImage(spriteSheet, 
		 80, 116, 
		 36,  36, 
	 	240,  80, 
		 72,  72);
	//draw bird 5
	ctx.drawImage(spriteSheet, 
		 42, 152, 
		 36,  36, 
	 	700,  24, 
		 72,  72);
}
