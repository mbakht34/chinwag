function rubberTool(){
  this.icon = "assets/eraser.jpg";
  this.name = "eraser";

// we need a draw function in order for the erase function to work.
  this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can erase from
			//there to the current mouse location
			else{
        erase();
				noFill();
				strokeWeight(50)
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
        noErase();



			}
		}
		//if the user has released the mouse we want to set the previousMouse values
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}
