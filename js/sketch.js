var cities = []
var totalCities = 12;

var recordDistance;
var bestEver;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  var canvas = createCanvas(3200, 3200);
  centerCanvas();
  
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  
  // create the city vertices
  for (var i=0; i<totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
  // initialize
  var d = calcDistance(cities);
  recordDistance = d;
  bestEver = cities.slice();
}

function draw() {
  background(0);

  // draw the city vertices
  fill(255);
  for (var i=0; i<cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  // draw the path (in white)
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (var i=0; i<cities.length; i++) {
    vertex(cities[i].x, cities[i].y);
  }
  //go back to the start
  vertex(cities[0].x, cities[0].y);
  endShape();

  // draw the bestEver path (in green)
  stroke(0, 255, 88);
  strokeWeight(3);
  noFill();
  beginShape();
  for (var i=0; i<cities.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y);
  }
  // go back to the start
  vertex(bestEver[0].x, bestEver[0].y);
  endShape();

  // random swap
  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i, j)

  // calculate the distance
  var d = calcDistance(cities);
  if (d < recordDistance) {
    recordDistance = d;
    bestEver = cities.slice();
  }
}

function swap(a, i, j) {
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function calcDistance(points) {
  var sum = 0;
  for (var i=0; i<points.length-1; i++) {
    var d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
    sum += d;
  }
  // add the distance from the start to finish
  d = dist(points[0].x,
    points[0].y,
    points[points.length-1].x,
    points[points.length-1].y);
  sum += d;
  return sum;
}
