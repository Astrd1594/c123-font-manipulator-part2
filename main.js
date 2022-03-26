function preload(){

}
function setup(){
    canvas = createCanvas(600, 600);
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Model loaded');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}