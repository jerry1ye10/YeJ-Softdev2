var radius = 5; //initial start radius
var growthRate = 5; //growth rate; will be negative when circle is shrinking
var requestID = 0; //stores animation request later for cancelling
var animate = false; //if animate is true then circle will grow and shrink

var canvas = document.getElementById("playground"); //accesses canvas in html
var ctx = canvas.getContext("2d");//2d context


// this function clears the screen which is necessary for continously animating
var clear = function(){
  ctx.clearRect( 0, 0, canvas.width, canvas.height );//clears canvas
  ctx.beginPath();
}

//constantly draws larger or smaller dot and clears it
var drawDot = function(){
  window.cancelAnimationFrame(requestID);
  if (animate){
    clear();//clear must be done to get visual effect shown
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();//draws dot
    radius += growthRate;
    //console.log(radius);
    //console.log(growthRate);
    if ((radius == 200) || (radius == 0)){
      growthRate = growthRate * -1;//changes growthRate from positive to negative or vice versa to adjust for shrinking and growing
    }
    requestID = window.requestAnimationFrame(drawDot);//recalls on method and stores requestID for future end animation call
  }
}

//stops animation function
var stopIt = function(){
  window.cancelAnimationFrame(requestID);
  animate = false;//stops animating things

}
//starts animation
document.getElementById('circle').addEventListener('click', function(){
  console.log('animation starting');
  animate = true;//begins to animate everything
  drawDot();
});

//ends animation
document.getElementById('stop').addEventListener('click', stopIt);//ends animation

var dvdButton = document.getElementById('dvd')

var dvdLogoSetup = function() {
  clear()
  window.cancelAnimationFrame(requestID);
  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
  var rectY = Math.floor(Math.random() * (canvas.height - rectHeight));

  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  var xVel = 1;
  var yVel = 1;

  dvdLogo = function(){
    clear();
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    rectX += xVel;
    rectY += yVel;
    requestID = window.requestAnimationFrame(dvdLogo);
    if ((rectX == canvas.width - 100) || (rectX == 0)){
      xVel *= -1
    }
    if ((rectY == canvas.height - 50) || (rectY == 0)){
      yVel *= -1
    }
  }
  dvdLogo()

  //var logo = new Image();
  //logo.src = "logo.jpg";
  //ctx.drawImage(logo)

}

dvdButton.addEventListener('click', dvdLogoSetup);
