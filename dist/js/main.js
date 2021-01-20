TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 2 });

var svg1  = document.querySelector(".svg1");
var wave1 = document.querySelector("#wave1");

var width1 = 600;
var sinus1 = CustomEase.create("sinus1", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

var amplitude1 = 250;
var frequency1 = 100;
var segments1  = 60;
var interval1  = width1 / segments1;

for (var i = 0; i <= segments1; i++) {
  
  var norm1 = 4 - i / segments1;
  var point1 = wave1.points.appendItem(svg1.createSVGPoint());
  
  point1.x = i * interval1;
  point1.y = amplitude1 / 1 * sinus1.getRatio(norm1);
    
  TweenMax.to(point1, 1, { y: -point1.y, repeat: -1, yoyo: true }).progress(norm1 * frequency1);  
}

TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 2 });

var svg2  = document.querySelector(".svg2");
var wave2 = document.querySelector("#wave2");

var width2 = 600;
var sinus2 = new CustomEase("sinus2", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

var amplitude2 = 250;
var frequency2 = 100;
var segments2  = 60;
var interval2  = width2 / segments2;

for (var i2 = 0; i2 <= segments2; i2++) {
  
  var norm2 = 4 - i2 / segments2;
  var point2 = wave2.points.appendItem(svg2.createSVGPoint());
  
  point2.x = i2 * interval2;
  point2.y = amplitude2 / 1 * sinus2.getRatio(norm2);
    
  TweenMax.to(point2, 1, { y: -point2.y, repeat: -1, yoyo: true }).progress(norm2 * frequency2);  
}

TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 2 });

var svg3  = document.querySelector(".svg3");
var wave3 = document.querySelector("#wave3");

var width3 = 600;
var sinus3 = new CustomEase("sinus3", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

var amplitude3 = 250;
var frequency3 = 100;
var segments3  = 60;
var interval3  = width3 / segments3;

for (var i3 = 0; i3 <= segments3; i3++) {
  
  var norm3 = 4 - i3 / segments3;
  var point3 = wave3.points.appendItem(svg3.createSVGPoint());
  
  point3.x = i3 * interval3;
  point3.y = amplitude3 / 1 * sinus3.getRatio(norm3);
    
  TweenMax.to(point3, 1, { y: -point3.y, repeat: -1, yoyo: true }).progress(norm3 * frequency3);  
}