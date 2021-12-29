mustachex=0;
mustachey=0;
function preload()
{
    mustache = loadImage('https://media.istockphoto.com/vectors/black-hipster-vector-mustache-vector-id485318064?k=20&m=485318064&s=612x612&w=0&h=rv_5ApmlcAXtnIZamfJAhWhuxJz2GqEf_3DVKntvG-Y=');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function draw()
{
image(video,0,0,300,300);
image(mustache, mustachex, mustachey, 30, 30);
}

function take_snapshot()
{
    save('myfilterImage.png');
}

function gotresult(result)
{
    if(result.length>0)
    {
        console.log(result);
        mustachex = results[0].pose.mustache.x-15; 
        mustachey = results[0].pose.mustache.y-15;
    }
}

function modelLoaded()
{
console.log('PoseNet is Initialized');
}