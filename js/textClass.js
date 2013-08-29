(function() {

var textClass = function(label, color, thisX, thisY, font, fade,delay,txtWidth) {
  this.initialize(label, color, thisX, thisY, font, fade,delay,txtWidth);
}
var p = textClass.prototype = new createjs.Container(); // inherit from Container

p.label;
p.txtWidth;
p.thisX;
p.thisY;
p.fade;
p.background;
p.delay;
p.color;
p.fontSize;
p.font;

p.Container_initialize = p.initialize;
p.initialize = function(label, color, thisX, thisY, font, fade,delay,txtWidth) {
	this.Container_initialize();
	
	this.label = label;
	this.color = color;
	this.font = font;
	this.delay=delay;
	this.fade=fade;
	this.txtWidth=txtWidth;
	
	var text = new createjs.Text(label, font, color);
	text.textBaseline = "top";
	text.textAlign = "left";
	text.lineWidth = txtWidth;
	var width = text.getMeasuredWidth()+30;
	var height = text.getMeasuredHeight()+20;
	
	//this.background = new createjs.Shape();
	//this.background.graphics.beginFill(color).drawRoundRect(0,0,width,height,10);
	
	text.x = thisX
	text.y = thisY

	this.addChild(text);

		if (fade==true){
	text.alpha=0;
	TweenLite.to(text, 1, {alpha:1, delay:delay});
	console.log(text);
	}
}





p.onTick = function() {
	//this.alpha = Math.cos(this.count++*0.1)*0.4+0.6;
}

window.textClass = textClass;
}());