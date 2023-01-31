var remove_decimals = 0;
var muneca_derechaX = 0;
var muneca_derechaY = 0;
var muneca_izquierdaX = 0;
var muneca_izquierdaY = 0;
var mice_on_venus;
var numeroDerecha,remove_decimals,volume;

function setup()
{
   video = createCapture(VIDEO);
   video.size(550,550);
   canvas = createCanvas(550,500);
   canvas.position(100,270);
   PoseNet = ml5.poseNet(video,modelo_cargado);
   PoseNet.on("pose",obtain_poses);
}

function draw()
{
  image(video,0,0,400,400);
  fill("red");
  stroke("blue");
  circle(muneca_derechaX,muneca_derechaY,20);
  numeroDerecha = Number(muneca_derechaY);
  remove_decimals = floor(numeroDerecha);
  volume=remove_decimals;
  document.getElementById("trash").innerHTML = "volumen="+volume;
  mice_on_venus.setVolume(volume);
}
function preload()
{
  mice_on_venus = loadSound("canción Minecraft.mp3")
}
function yalp()
{
  mice_on_venus.play();
}
function modelo_cargado()
{
  console.log("model loaded");
}
function obtain_poses(results)
{
  if(results.length>0)
  {
   //console.log(results);
   muneca_derechaX = results[0].pose.rightWrist.x;
   muneca_derechaY = results[0].pose.rightWrist.y;

   muneca_izquierdaX = results[0].pose.leftWrist.x;
   muneca_izquierdaY= results[0].pose.leftWrist.y;
   //console.log(muneca_izquierdaX+" "+muneca_izquierdaY)
   //console.log(muneca_derechaX+" "+muneca_derechaY)
  }
}