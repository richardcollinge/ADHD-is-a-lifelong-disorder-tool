// JavaScript Document
(function() {

var circleClass = function(thisX, thisY, title, delay, pageType) {
  this.initialize(thisX, thisY, title, delay, pageType);
 //var circleHolder
}
var p = circleClass.prototype = new createjs.Container(); // inherit from Container

var imageSRC;

p.thisX;
p.thisY;
p.title;
p.delay;
p.circleHolder

p.Container_initialize = p.initialize;

p.initialize = function(thisX, thisY, title, delay, pageType) {
	this.Container_initialize();

	this.title = title;
	this.pageType =pageType;
	this.delay=delay;


	var circle = new createjs.Shape();
	circle.graphics.beginFill("#094891").drawCircle(0, 0, 80);
	var label = new createjs.Text(title, "bold 14px Arial", "#fff");
//console.log(title);
	label.textAlign = "center";
	label.y = -7;

var circleHolder = new createjs.Container();
	circleHolder.name =this.title		
	circleHolder.addChild(circle, label);
	this.addChild(circleHolder);
    this.x=thisX;
    this.y=thisY;
    console.log(this.title + this.pageType)
 //this.regX=20;
//this.regY=20;
	///fade animation
	
	this.alpha=0;
	TweenLite.to(this, 1, {alpha:1, delay:delay});

p.onPress = function(evt) {

	 this.finishAnim()
	TweenLite.to(this, .5, {scaleX:1.3,scaleY:1.3,ease:Back.easeInOut});

}

p.finishAnim = function() {

console.log("press" + this.title + this.pageType);
animDown(this.title, this.pageType) 	
}	

}





window.circleClass = circleClass;
}());