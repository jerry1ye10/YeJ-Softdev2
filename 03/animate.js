//Jerry Ye
//SoftDev2 pd07
//K03 -- They lock us in the tower whenever we get caught ...
//2019-02-06
var radius = 5; //initial start radius
var growthRate = 5; //growth rate; will be negative when circle is shrinking
var requestID; //stores animation request later for cancelling
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
