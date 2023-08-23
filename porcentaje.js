function setup() {
 canvas=createCanvas(299,299);
 canvas.center();
 background("white");
  canvas.mouseReleased(classifyCanvas);
   synth = window.speechSynthesis; 
}

function preload() {
  classifier=ml5.imageClassifier("DoodleNet")  
}

function draw() {
strokeWeight(13); stroke(0);
if (mouseIsPressed) {
line(pmouseX,pmouseY,mouseX,mouseY)    
}   
}

function classifyCanvas() {
classifier.classify(canvas,uhh) 
}
function uhh(error,results) {
if (error) {
  console.log(error)  
} else {
document.getElementById("hola").innerHTML=results[0].label; 
document.getElementById("como").innerHTML=results[0].confidence; 
}
}

function estas() {
background("white")    
}