// Jerry Ye
// SoftDev pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-14

var pic = document.getElementById("vimage"); //Canvas-like XML box
var clear = document.getElementById("but_clear"); //Clear button
var move = document.getElementById('move');
var mys = document.getElementById('mystery');
var drawCircle = true;
var requestID = 0;
var xVelocity = 1;
var yVelocity = 1;
changeColor = false


pic.addEventListener( "click" , function(e) { //draws circles and lines between them
    e.preventDefault();
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //generates circle image using XML
    circle.xVelocity = 1;
    circle.yVelocity = 1;
    circle.addEventListener("click", function(e){
      drawCircle = false
      var color = circle.getAttribute('fill');
      if (color == "red"){
        circle.setAttribute("fill", "green");
      }
      else if(color == "green"){
        pic.removeChild(circle);
        var c = document.createElementNS("http://www.w3.org/2000/svg", "circle"); //generates circle image using XML
        c.setAttribute("cx", event.offsetX);
        c.setAttribute("cy", event.offsetY);
        c.setAttribute("r", 10);
        c.setAttribute("fill", "red");
        c.setAttribute("stroke", "black");
        pic.appendChild(c);
      }
    })
    if (drawCircle){
      circle.setAttribute("cx", event.offsetX);
      circle.setAttribute("cy", event.offsetY);
      circle.setAttribute("r", 10);
      circle.setAttribute("fill", "red");
      circle.setAttribute("stroke", "black");
      pic.appendChild(circle);
    }
    drawCircle = true;

  })

clear.addEventListener( "click" , function() {
  len = pic.children.length;
  for (var i = 0; i < len; i++){
    pic.removeChild(pic.children[0]);
  }
})

move.addEventListener("click", function(){
  window.cancelAnimationFrame(requestID);
  mo = function(){
    requestID = window.requestAnimationFrame(mo);
    len = pic.children.length;
    for (var i = 0; i < len; i++){
      c = pic.children[i];
      var xCor = Number(c.getAttribute("cx"));
      var yCor = Number(c.getAttribute("cy"));
      c.setAttribute("cx", xCor + c.xVelocity);
      c.setAttribute("cy", yCor + c.yVelocity);
      xCor = Number(c.getAttribute("cx"));
      yCor = Number(c.getAttribute("cy"));
      if(xCor <= 0 || (xCor  + Number(c.getAttribute("r"))) >= 500){
          c.xVelocity *= -1;
        }
        if(yCor <= 0 || (yCor  + Number(c.getAttribute("r"))) >= 500){
          c.yVelocity *= -1;
        }
      }
  }
  mo();
})

mys.addEventListener("click", function(){
  if (changeColor == false){
    changeColor = true;
  }
  else{
    changeColor = false;
  }
  if (changeColor){
    for (var i = 0; i < len; i++){
      c = pic.children[i];
      c.setAttribute("fill", "blue");
  }
}
  else {
    for (var i = 0; i < len; i++){
      c = pic.children[i];
      c.setAttribute("fill", "red");
  }
}
})
