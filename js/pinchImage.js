// JavaScript Document

(function() {

var pinchImage = function(thisX, thisY, asset,fade,delay,swipeable) {
  this.initialize(thisX, thisY, asset,fade,delay,swipeable);
}
var p = pinchImage.prototype = new createjs.Container(); // inherit from Container

p.thisX;
p.thisY;
p.asset;
p.fade;
p.delay;
p.swipeable;

p.Container_initialize = p.initialize;

p.initialize = function(thisX, thisY, asset, fade, delay,swipeable) {
	this.Container_initialize();
	
	this.asset = asset;
	this.delay=delay;
	this.fade=fade;
	this.swipeable = swipeable;
	
	var imageSRC= new createjs.Bitmap(asset);
	
	    imageSRC.name=asset;
	this.addChild(imageSRC);
	
		imageSRC.x = thisX;
	imageSRC.y = thisY;
	
		if (fade==true){
	imageSRC.alpha=0;
	TweenLite.to(imageSRC, 1, {alpha:1, delay:delay});
	console.log(fade);
	}

}//end p function
	
	


$(p).swipe( {
  pinchStatus:function(event, phase, direction, distance , duration , fingerCount, pinchZoom) {
	 alert("Pinch zoom " + pinchZoom + "Distance between 2 fingers " + distance +" Direction " + direction)
   // $(this).html("Pinch zoom " + pinchZoom + "Distance between 2 fingers " + distance +" Direction " + direction);
  },
  fingers:2,	
  threshold:0	
});




window.pinchImage = pinchImage;
}());