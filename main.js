
Left_wristX=0;
Right_wristX=0;
difference=0;

function setup()
{
video = createCapture(VIDEO);
video.size(550, 550);
canvas = createCanvas(600, 600);
canvas.position(590, 150);
poseNetVar = ml5.poseNet(video, ModelLoaded);
poseNetVar.on("pose", gotPose);  
}                   
function draw()
{
   
    background("#00FF00");
    fill("#ffff00");
    stroke("#696969");   
    text("Memes", 100, 100);
    textSize(difference);
}

function ModelLoaded()
{
  console.log("MODEL LOADED");
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results); 
        Left_wristX = results[0].pose.leftWrist.x;
        Right_wristX = results[0].pose.rightWrist.x;
        difference = floor(Left_wristX - Right_wristX);
        
       
    }
}