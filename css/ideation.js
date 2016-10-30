
var tl = new TimelineLite({onUpdate:updateSlider}),
    circle = document.getElementById("circle");

tl.to(circle, 1, {morphSVG:"#hippo"}, "+=1")
  .to(circle, 1, {morphSVG:"#star"}, "+=1")
  .to(circle, 1, {morphSVG:"#elephant"}, "+=1")
  .to(circle, 1, {morphSVG:circle}, "+=1");








/* controls */

$("#devslider").slider({
  range: false,
  min: 0,
  max: 1,
  step:.001,
  slide: function ( event, ui ) {
    tl.progress( ui.value ).pause();
  },
  stop: function () {
    tl.play();
  }
}); 

function updateSlider() {
  $("#devslider").slider("value", tl.progress());
} 