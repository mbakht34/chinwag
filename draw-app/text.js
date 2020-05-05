function textTool(){
  this.icon = "assets/T.png"
  this.name = "Text"
  // var myText
  var editState = false;
  var textInp = createInput('Enter text here...')
  textInp.position(900,7)
textArr = [];


  this.draw = function(){
    if(mouseIsPressed){
      textSize(slider.value()+30)
      fill(255)
      let myText = text(textInp.value(), mouseX, mouseY)
      textArr.push(myText)

      for (var i = 0; i<textArr.length; i++)
      {
        myNewText = (textInp.value())
      }


}

  }
}
