nosex = 0
nosey = 0

function preload() {
clown_nose = loadImage('https://i.postimg.cc/4xZr5jvj/Clown-nose-large.png');
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotposes);

    
}

function draw() {
image(video,0,0,400,400)
fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,20);
image(clown_nose,nosex,nosey,60,60);
}

function take_snapshot() {
    save("clown.png");
}

function modelLoaded() {
    console.log("posenet initialized");
}

function gotposes(results) {
    if(results.length>0){
    console.log(results);
    nosex = results[0].pose.nose.x-20;
    nosey = results[0].pose.nose.y-20;
    console.log("nosex = " + nosex)
    console.log("nosey = " + nosey)
    }
}




