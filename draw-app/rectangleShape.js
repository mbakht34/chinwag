function rectTool() {
  // gives the tool a name and icon
  this.icon = "assets/rectangle.jpg";
  this.name = "Rectangle Tool";
  // variables for the state of the shape and the button
  var circShape;
  circShape = {
    circState: false
  }
  var rectShape;

  rectShape = {
    rectState: false
  }

  // creates a button for users to click
  circShape = createButton("Circle");
  select('#circShape').mouseClicked(function() {
    // changes state of shape tool
    if (!circShape.circState) {
      rectShape.rectState = false;
      circShape.circState = true;
      circShape.html("Circle")

    }
  })
  // creates button for users to click
  rectShape = createButton("Rectangle");
  select('#rectShape').mouseClicked(function() {
    if (!rectShape.rectState) {
      // changes state of shape tool
      circShape.circState = false;
      rectShape.rectState = true;
      rectShape.html("Rectangle")
    }
  })

  // checks to see if the drawing is on the canvas or not
  function mousePressOnCanvas(canvas) {
    if (mouseX > canvas.elt.offsetLeft && mouseX < (canvas.elt.offsetLeft + canvas.width) && mouseY > canvas.elt.offsetTop && mouseY < (canvas.elt.offsetTop + canvas.height)) {
      return true;
    }
    return false;
  }
  var previousMouseX = -1;
  var previousMouseY = -1;
  this.draw = function() {

    if (mouseIsPressed && mousePressOnCanvas) {
      if (previousMouseX == -1 && previousMouseY == -1) {
        // sets previous mouse value to current value
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      } else {

        // noFill();
        updatePixels();
        if (rectShape.rectState) {
          // draws the rectangle
          rect(previousMouseX, previousMouseY, mouseX, mouseY)
        } else if (circShape.circState) {
          // draws circle
          ellipse(previousMouseX, previousMouseY, mouseX, mouseY)
        }

      }
    } else {
      // updates position of mouse
      previousMouseX = -1;
      previousMouseY = -1;
      loadPixels();
    }
  }
}
