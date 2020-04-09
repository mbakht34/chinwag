// this function allows the user to draw lines when the line tool is selected
function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
// this is a constructor function to draw any images freehand
	this.draw = function(){
        // this is for the first thing that we draw freehand
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}
            //once you have drawn then the updatepixels method will be called. This is for any drawings that you make that require changes.
			else{
				updatePixels();
				strokeWeight(10)
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        //this gives the users the option to change to different modes of drawing.
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
