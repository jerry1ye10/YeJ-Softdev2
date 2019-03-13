// Jerry Ye
// SoftDev pd7
// K09 -- Connect the Dots
// 2019-03-13

var pic = document.getElementById("vimage"); //Canvas-like XML box
var clear = document.getElementById("but_clear"); //Clear button

var lastX = null
var lastY = null

pic.addEventListener( "click" , function(e) { //draws circles and lines between them
    e.preventDefault();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //generates circle image using XML
    circle.setAttribute("cx", event.offsetX);
    circle.setAttribute("cy", event.offsetY);
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");
    pic.appendChild(circle);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line"); //generates line image using XML
    if (lastY != null && lastX != null){ //if there is more than one circle draw then draw a line connecting the circles
      line.setAttribute("x1", lastX);
      line.setAttribute("x2", event.offsetX);
      line.setAttribute("y1", lastY);
      line.setAttribute("y2", event.offsetY);
      line.setAttribute("stroke", "black");
      pic.appendChild(line)
    }
    lastX = event.offsetX;
    lastY = event.offsetY;
  })

clear.addEventListener( "click" , function() {
  len = pic.children.length;
  for (var i = 0; i < len; i++){
    pic.removeChild(pic.children[0]);
  }
  lastX = null;
  lastY = null;

});
