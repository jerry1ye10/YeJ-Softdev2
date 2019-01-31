var c = document.getElementById("slate");//canvas
var ctx = c.getContext("2d");//converts canvas context to 2d
var drawing = 'dot'//state variable used to track what user will be drawing
var toggle = document.getElementById("toggle")//accesses toggle button
var clear = document.getElementById("clear")//accesses clear button
//for toggle button
toggle.addEventListener("click", function(e){
  if (drawing == 'dot'){ //toggles to rectangle
    drawing = 'rectangle';
    toggle.innerHTML = 'rectangle'; //changes html
  }
  else{ //toggles to dot
    drawing = 'dot';
    toggle.innerHTML = 'dot';
  }
}
)
// for clear button
clear.addEventListener("click", function(e){
  ctx.clearRect(0,0,c.width,c.height);//clears starting from origin clearing both height and width worth(entire canvas)
}
)
// for drawing
c.addEventListener("click", function(e){
  if (drawing == 'dot'){ //drawing ellipse
    ctx.ellipse( e.offsetX, e.offsetY, 100, 100, 0, 0, 2 * Math.PI );
    ctx.fill()
  }
  else{//drawing rectangle
    ctx.fillRect( e.offsetX, e.offsetY, 100, 100 );
  }
})
