
function vertexTool(){
// this gives and icon and name to the tool
  this.icon = "assets/vector.jpg";
  this.name = "vector";
  // an array to store the points that are made
  var currentShape = [];
  // buttons to change the state of the vertex tool
  var editButton;
  var finishButton;
  // to ensure edit mode is always off unless specifically asked to be on
  var editMode = false;

   editButton = createButton("Edit Shape")
   select('#editButton').mouseClicked(function(){
     if(!editMode){
       editMode = true;
       editButton.html("Edit Shape")
       console.log("test edit");
     }
     else{
       editMode = true;
       editButton.html("Add Vertices");
     }

   })
   finishButton = createButton("Finish Shape")
   select("#finishButton").mouseClicked(function() {
      editMode = false;
      draw();
      loadPixels();
      currentShape = [];
      console.log("test finish")

 	});




 function mousePressOnCanvas(canvas){
 	if (mouseX> canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft +canvas.width)&& mouseY > canvas.elt.offsetTop && mouseY < (canvas.elt.offsetTop + canvas.height)){
 		return true;
 	}
 	return false;
 }
 this.draw = function (){

   if (mouseIsPressed && mousePressOnCanvas(select('#content'))){
     if(!editMode){
     currentShape.push({
       x: mouseX,
       y: mouseY
     });
   }
     else{
       for (var i = 0; i<currentShape.length; i++){
         updatePixels();
         if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) <15){
           currentShape[i].x = mouseX;
           currentShape[i].y = mouseY;
         }
       }
     }
    beginShape();
     for (var i = 0; i<currentShape.length; i++){
       vertex(currentShape[i].x, currentShape[i].y);
       if(editMode){
         push();
         fill(255,0,0);
         ellipse(currentShape[i].x, currentShape[i].y, 10)
         noFill();
              }
     }

     endShape();
   }
 }


}
