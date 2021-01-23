// wave 1

TweenLite.defaultEase = Sine.easeInOut;
TweenLite.set("g", { y: window.innerHeight / 2 });

var svg  = document.querySelectorAll("svg");
var wave = document.querySelectorAll("#wave");

for (let z = 0; z < svg.length; z ++){
  var width = 1000;
  var sinus = CustomEase.create("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");
  
  var amplitude = 200;
  var frequency = 20;
  var segments  = 1300;
  var interval  = width / segments;
  
  for (var i = 0; i <= segments; i++) {
    
    var norm = .8 - i / segments;
    var point = wave[z].points.appendItem(svg[z].createSVGPoint());
    
    point.x = i * interval;
    point.y = (amplitude / 1) * sinus(norm);
      
    TweenMax.to(point, 0.6, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency);  
  }

}



// wave2

// TweenLite.defaultEase = Sine.easeInOut;
// TweenLite.set("g", { y: window.innerHeight / 2 });

// var svg2  = document.querySelector(".svg2");
// var wave2 = document.querySelector("#wave2");

// var width2 = 600;
// var sinus = new CustomEase("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

// var amplitude2 = 250;
// var frequency2 = 100;
// var segments2  = 60;
// var interval2  = width2 / segments2;

// for (var i2 = 0; i2 <= segments2; i2++) {
  
//   var norm2 = 4 - i2 / segments2;
//   var point2 = wave2.points.appendItem(svg2.createSVGPoint());
  
//   point2.x = i2 * interval2;
//   point2.y = (amplitude2 / 1) * sinus(norm2);
    
//   TweenMax.to(point2, 1, { y: -point2.y, repeat: -1, yoyo: true }).progress(norm2 * frequency2);  
// }


// wave3

// TweenLite.defaultEase = Sine.easeInOut;
// TweenLite.set("g", { y: window.innerHeight / 2 });

// var svg3  = document.querySelector(".svg3");
// var wave3 = document.querySelector("#wave3");

// var width3 = 600;
// var sinus3 = new CustomEase("sinus3", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

// var amplitude3 = 250;
// var frequency3 = 100;
// var segments3  = 60;
// var interval3  = width3 / segments3;

// for (var i3 = 0; i3 <= segments3; i3++) {
  
//   var norm3 = 4 - i3 / segments3;
//   var point3 = wave3.points.appendItem(svg3.createSVGPoint());
  
//   point3.x = i3 * interval3;
//   point3.y = amplitude3 / 1 * sinus3.getRatio(norm3);
    
//   TweenMax.to(point3, 1, { y: -point3.y, repeat: -1, yoyo: true }).progress(norm3 * frequency3);  
// }