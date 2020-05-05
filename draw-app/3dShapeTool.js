function drawShapeTool() {
  var previousMouseX = -1;
  var previousMouseY = -1;
  this.icon = "assets/star.png";
  this.name = "3d square";
  this.shape = []

  this.draw = function() {
    this.shape= [
      {x: mouseX, y: mouseY},
      {x: mouseX+70, y: mouseY+90},
      {x: mouseX+160, y: mouseY+100},
      {x: mouseX +80, y: mouseY+ 170},
      {x: mouseX + 130, y: mouseY +250},
      {x: mouseX +10, y: mouseY +200 },
      {x: mouseX -60 , y: mouseY +230},
      {x: mouseX -40 , y: mouseY +170},
      {x: mouseX -130 , y: mouseY +130},
      {x: mouseX -30 , y: mouseY +100},


    ]
    if (mouseIsPressed) {
       scale(slider.value())
      beginShape();
      noFill();
      strokeWeight(slider.value())
      vertex(this.shape[0].x, this.shape[0].y )
      vertex(this.shape[1].x, this.shape[1].y )
      vertex(this.shape[2].x, this.shape[2].y )
      vertex(this.shape[3].x, this.shape[3].y )
      vertex(this.shape[4].x, this.shape[4].y )
      vertex(this.shape[5].x, this.shape[5].y )
      vertex(this.shape[6].x, this.shape[6].y )
      vertex(this.shape[7].x, this.shape[7].y )
      vertex(this.shape[8].x, this.shape[8].y )
      vertex(this.shape[9].x, this.shape[9].y )


      // fill(0);
      // ellipse(shape[0].x, shape[0].y, shape[1].sizeX, shape[1].sizeY);
      endShape(CLOSE);

    }

  }
}
