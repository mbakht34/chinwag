function deleteVertex(){
  this.icon = "assets/nopen.png"
  this.name = "vertex deletaa"
  var d

  this.draw = function() {

    if(mouseIsPressed){
  for (let i = 0; i<currentShape.length; i++){
    for(let j = 1; j<currentShape.length; i++){
    d = dist(currentShape[i].x , currentShape[i].y, mouseX, mouseY)
    if (d<10){
      currentShape.splice(i, 1)
    console.log("distance = "+d);
    console.log(currentShape);
    updatePixels();
    strokeWeight(10)
    line(currentShape[j].x , currentShape[j].y, currentShape[i].x, currentShape[i].y )
    return currentShape;

    }
    // erase()


  }
}

}
}

}
