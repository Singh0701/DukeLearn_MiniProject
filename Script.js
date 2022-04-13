var canvas;
var file;
var image;
var ctx;
function upload() {
   file = document.getElementById("imgin");
   image = new SimpleImage(file);
   canvas = document.getElementById("canvas1");
   ctx = canvas.getContext("2d");
   clearCanvas();
   image.drawTo(canvas);
}
function makeGray() {
    if(image==null || !image.complete()) {
        alert("Image not loaded");
        return;
    }
    for(var pixel of image.values()) {
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        pixel.setBlue(avg);
        pixel.setGreen(avg);
        pixel.setRed(avg);
    }
    clearCanvas();
    image.drawTo(canvas);
}
function makeRed() {
    if(image==null || !image.complete()) {
        alert("Image not loaded");
        return;
    }
    for(var pixel of image.values()) {
      var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;  
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen((2*avg)-255);
        pixel.setBlue((2*avg)-255);
      } 
    }
    clearCanvas();
    image.drawTo(canvas);
}
function makeGreen() {
    if(image==null || !image.complete()) {
        alert("Image not loaded");
        return;
    }
    for(var pixel of image.values()) {
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;  
        if (avg < 128){
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
        else {
          pixel.setRed((2*avg)-255);
          pixel.setGreen(255);
          pixel.setBlue((2*avg)-255);
        } 
    }
    clearCanvas();
    image.drawTo(canvas);
}
function makeBlue() {
    if(image==null || !image.complete()) {
        alert("Image not loaded");
        return;
    }
    for(var pixel of image.values()) {
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;  
        if (avg < 128){
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
        else {
          pixel.setRed((2*avg)-255);
          pixel.setGreen((2*avg)-255);
          pixel.setBlue(255);
        } 
    }
    clearCanvas();
    image.drawTo(canvas);
}
function makeRainbow() {
    if(image==null || !image.complete()) {
        alert("Image not loaded");
        return;
    }
}
function makeBlur() {
    if(image==null || !image.complete()) {
        alert("Image not loaded");
        return;
    }
}
function resetImage() {
    clearCanvas();
    image = null;
    image = new SimpleImage(file);
    image.drawTo(canvas);
}
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}