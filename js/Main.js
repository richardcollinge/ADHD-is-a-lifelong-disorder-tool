// JavaScript Document

var stage, holder, textureBG, girl6, boy13, man18, logo, nextBtn,fullWindowState,wrapper,fullScreenBtn, containerMC,  containerMC2,lastContainer, content, globalPage, globalPageType, introVideo, canvasJ, ctx, fpsLabel, mask, soundBtn,loaderBar, loaderStage, bar ;
var pageNum=0;
var section="topLevel";
var pageStatus="top";

var topArray=["page1","page2","page3"]
var girlArray = ["girl1", "girl2", "girl3", "girl4"]
var boyArray = ["boy1","boy2"];
var manArray=["man1","man2"];
var currentArray=[];
var homeBtn;
var headerMC;
		
		
		function initMain() {
			//initXML();
			this.variable=5//this is a public var declared within a function
		//	window.onorientationchange = readDeviceOrientation;

			canvas = document.getElementById("demoCanvas");
			wrapper = document.getElementById("wrapper");
            stage = new createjs.Stage(canvas);
			createjs.Touch.enable(stage);
			stage.enableMouseOver(10);
            stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas
			stage.mouseEventsEnabled = true;
			fpsLabel = new createjs.Text("-- fps","bold 14px Arial","#000");
stage.addChild(fpsLabel);
fpsLabel.x = 100;
fpsLabel.y = 20;

         
			init();	//this is for preload.js		
		}

function update(){
stage.addChild()
		}
		
function initFirstPage(){
			textureBG= stage.addChild(new image(0,0,"assets/bg.png", true,0,true));
			
	///header
	headerMC = new createjs.Container();
	homeBtn = headerMC.addChild(new Button("home","topLevel", "#F00", "assets/homeIcon.png", 916,20,true));
	stage.addChild(headerMC);

			//containerMC = new createjs.Container();
	       // initContent()
		   
			animNextPage();
		
          // nextBtn = containerMC.addChild(new Button("next","topLevel", "#F00", "assets/arrow.png", 916,336,true));
		  // stage.addChild(containerMC);
			//updateStaticNav();
			

createjs.Ticker.setFPS(60);
createjs.Ticker.addListener(window);
stage.update();//updates the stage	

			
}

function goHome(){
section="topLevel";
pageNum=2;

goPage();	
}



		

///go to next page// this is a generic function
function goPage(_pageStatus){
pageStatus = _pageStatus
	console.log("next page" + pageNum);

	//lastContainer = containerMC
	TweenLite.to(containerMC, .5, {alpha:0, onComplete:removeLastPage});
	//updateStaticNav();
}

function removeLastPage(){
	console.log("remove last page");
//stage.removeChild(containerMC);
stage.removeChild(containerMC);
	animNextPage();

}

function animNextPage(){
	containerMC = new createjs.Container();
	//containerMC2.addChild(textureBG);
	//textureBG= containerMC2.addChild(new image(0,0,"assets/tex.png", false,0,true));
	stage.addChild(containerMC);
	
	TweenLite.from(containerMC, .5, {alpha:0, onComplete:initContent});
}



function initContent(){

	if(pageStatus=="hold"){
		//do nothing
		console.log("do nothing");
	}
	
		
	if(pageStatus=="next"){
	pageNum+=1;
	}
	if(pageStatus=="prev"){
	pageNum-=1;	
	}
	

	
	console.log(section + "page num is " + pageNum);

	
	if(section=="topLevel"){
		currentArray=topArray;
		
		if(pageNum==0){
		girl6= containerMC.addChild(new image(148,538,"assets/girl6.png", true,0,true));
		boy13= containerMC.addChild(new image(440,392,"assets/boy13.png", true,0,true));
		man18= containerMC.addChild(new image(731,246,"assets/man18.png", true,0,true));
		pageStatus="next";//triggers the page number after initial load
		}
		
		if(pageNum==1){
	
	initText(currentArray[pageNum]);//generic page
	    }
		
		if(pageNum==2){
	girl6 = containerMC.addChild(new Button("sub","girl", "#F00", "assets/girl6.png", 148,538,true,0.5));
	boy13 = containerMC.addChild(new Button("sub","boy", "#F00", "assets/boy13.png", 440,392,true,1));
    man18 = containerMC.addChild(new Button("sub","man", "#F00", "assets/man18.png", 731,246,true,1.5));
		}
	}
	if(section=="girl"){
	currentArray=girlArray;
	initText(currentArray[pageNum]);//generic page
	}
	if(section=="boy"){
	currentArray=boyArray;
	initText(currentArray[pageNum]);//generic page
	}
	
	if(section=="man"){
	currentArray=manArray;
	initText(currentArray[pageNum]);//generic page
	}
	
	///init Arrows/////////////////////////////
		if(pageNum>=1){
	prevBtn = containerMC.addChild(new Button("prev",section, "#F00", "assets/arrowPrev.png", 20,336,true,0));	
	}
	if(pageNum<currentArray.length-1){
	nextBtn = containerMC.addChild(new Button("next",section, "#F00", "assets/arrow.png", 916,336,true,0));
	}
	///////////////////////////////////////////
	
	

}

//this is for
function initText(page){
	//white rect
        var square = new createjs.Shape();
	    square.graphics.beginFill("#ffffff").drawRect(0, 200, 1024,300);
	//	var squareHolder = new createjs.Container();
	//squareHolder.name =this.title		
	containerMC.addChild(square);
	//stage.addChild(squareHolder);
	TweenLite.from(containerMC, .5, {alpha:0, delay:0});

////end white rect

        globalPage = page;
		console.log(globalPage);
		content = new createjs.DOMElement(globalPage);
		containerMC.addChild(content);

		content.x=500;
		content.y=400;
		//content.alpha=0;
		//TweenLite.from(content, .5, {x:0, delay:0});//works
		//$("p").css("border", "3px solid red");
		var paras = $('p')
		//TweenLite.from(content,  1, { css:{left:"50", top: "10"}, css:{left:"0", top: "50"}});
		//TweenLite.from($(paras[0]), .5, {alpha:0, delay:0});
		 // var logo = document.getElementById("page2.p");
       // TweenLite.from($('#one'), 1, {css:{border:"1px solid blue"}, css:{border:"3px solid blue"}, delay:2, onComplete:traceAnim});
	 TweenLite.to($('p'), 0.3, {top:0, alpha:1, rotation:360});
	  //  paras.animate({ fontSize: "24pt" }, 1000).delay(50000);
		//paras.fadeIn(1000).animate({"left":"-155px"}, "slow") 
       //  $(paras[1]).fadeIn('slow');
		//$(paras[1]).css("border", "3px solid blue");
		//TweenLite.from(content, .5, {alpha:0, delay:0});

}

function traceAnim(){
console.log("anim finished");	
}


///popup/////
function openGraph(){
content.alpha=0;
mask= stage.addChild(new image(0,0,"assets/mask.png", true,0,false));
soundBtn =  stage.addChild(new Button("closeGraph","", "#F00", "assets/touch_r3_c3.png", 700,100,true,1, 81,102));
	
}

function closeGraph(){
TweenLite.to(content, .5, {alpha:1, delay:1});
TweenLite.to([mask,soundBtn], .5, {alpha:0, onComplete:removeSoundElements});
}

function removeSoundElements(){
	console.log("sound elements removed");
stage.removeChild(mask,soundBtn);	
}






/////////swipe functions
 

///jquery workaround for oop
(function($) {
    $.fn.hitch = function(ev, fn, scope) {
        return this.bind(ev, function() {
            return fn.apply(scope || this, Array.prototype.slice.call(arguments));
        });
    };
})(jQuery);


function tick() {
	
	 if (update) {
                stage.update();
            }
	fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS())+" fps";
	// draw the updates to stage
	stage.addChild(fpsLabel);

}