(function() {

var Button = function(buttonType,label, color, asset,thisX, thisY,fade,delay) {
  this.initialize(buttonType,label, color, asset,thisX, thisY,fade,delay);
}
var p = Button.prototype = new createjs.Container(); // inherit from Container


p.label;
p.buttonType;
p.asset;
p.background;
p.count = 0;
p.thisX;
p.thisY;
p.fade;
p.delay;

//var buttonType= p.buttonType;

p.Container_initialize = p.initialize;
p.initialize = function(buttonType,label, color, asset,thisX, thisY,fade,delay) {
	this.Container_initialize();
	
	this.label = label;
	this.buttonType= buttonType;
	this.asset = asset;
	this.delay=delay;
	this.fade=fade;

	
	var buttonBG = new createjs.Bitmap(asset);

		this.x = thisX;
	    this.y = thisY;
        this.regX=this.width/2;
		this.regY=this.height/2;
	this.addChild(buttonBG);
	
	if (fade==true){
	buttonBG.alpha=0;
	TweenLite.to(buttonBG, .5, {alpha:1, delay:delay});
	//console.log(fade);
	}
	
	//console.log(buttonType);
}


p.onClick = function() {

//alert("click");
	//console.log(this.buttonType);
    section = this.label;
	
	
	
	if(this.buttonType=="sub"){
	pageNum=0;//resets page number when loading a new section
	//pageStatus="hold";
	goPage("hold");
	}
	
	if(this.buttonType=="next"){
		goPage("next");
	}
	
	if(this.buttonType=="prev"){
		goPage("prev");
	}
	
	if(this.buttonType=="home"){
		//console.log("go home");
		goHome();
	}
	
	
	if(this.buttonType=="openGraph"){
		openGraph();
	}
	
	if(this.buttonType=="closeGraph"){
		closeGraph();
	}
	
}

p.onPress = function(evt) {
	//alert("press");
	//console.log("press");
}


p.onTick = function() {
	//this.alpha = Math.cos(this.count++*0.1)*0.4+0.6;
}


function onImgPress(e) { 
img.onClick = onImgClick; 
var offset = {x:img.x-e.stageX, y:img.y-e.stageY}; 
e.onMouseMove = function (e) { 
img.x = e.stageX +offset.x 
}
}



function onImgClick( e ) { 
img.onClick = null; 
e.onMouseMove = null;
}

window.Button = Button;
}());