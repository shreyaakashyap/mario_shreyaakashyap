
function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	coin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mariodie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

		console.log("Nose X = " + noseX + " Nose Y = " + noseY);
	}
}

function draw() {
	game();
}






