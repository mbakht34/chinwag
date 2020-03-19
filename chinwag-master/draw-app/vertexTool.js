
function vertexTool(){

  this.icon = "assets/vector.jpg";
  this.name = "vector";
  var currentShape = [];
  var editButton;
  var finishButton;

  var editMode = false;
 this.setup = function(){

   loadPixels();
   editButton = createButton("Edit Shape")
   finishButton = createButton("Finish Shape")

 }
 this.draw = function (){

   if (mouseIsPressed){
     currentShape.push({
       x: mouseX,
       y: mouseY
     });
     beginShape();
     for (var i = 0; i<currentShape.length; i++){
       vertex(currentShape[i].x, currentShape[i].y);
     }
     endShape();
   }
 }


}
