// JavaScript Document
var loaderBar;
       // var stage;
        var bar;
        var lc;
        var offset;
        var imageContainer;
        var currentImage;
        var update;
        var borderPadding;
        var loaderWidth;
        var loaderColor;
        var totalLoaded;
        var preload;

		
 function init() {
	 
	 if (window.top != window) {  
	 
	document.getElementById("header").style.display = "none";       
	 	}

  manifest = [
				{src:"assets/bg.png", id:"image0"},
				{src:"assets/arrow.png", id:"image1"},
				{src:"assets/girl6.png", id:"image2"},
				{src:"assets/boy13.png", id:"image3"},
				{src:"assets/man18.png", id:"image4"}
			];
			

console.log("preload init");

            //canvas = document.getElementById('demoCanvas'); 
            update = false;
           // stage = new createjs.Stage(canvas);
            
            totalLoaded = 0;
            borderPadding = 10;

            var barHeight = 10;
            loaderColor = createjs.Graphics.getRGB(0,0,0);
            loaderBar = new createjs.Container();

            bar = new createjs.Shape();
            bar.graphics.beginFill(loaderColor).drawRect(0, 0, 1, barHeight).endFill();

            imageContainer = new createjs.Container();
            imageContainer.x = 430;
            imageContainer.y = 200;  

            loaderWidth = 300;
            stage.addChild(imageContainer);

            var bgBar = new createjs.Shape();
            var padding = 3
            bgBar.graphics.setStrokeStyle(1).beginStroke(loaderColor).drawRect(-padding/2, -padding/2, loaderWidth+padding, barHeight+padding);

            loaderBar.addChild(bgBar);
            loaderBar.addChild(bar);
            loaderBar.x = canvas.width - loaderWidth>>1;
			loaderBar.y = canvas.height - barHeight>>1;

            stage.addChild(loaderBar);

            preload = new createjs.PreloadJS(false);


         preload.onProgress = handleProgress;
         preload.onComplete = handleComplete;
         preload.onFileLoad = handleFileLoad;
    
            preload.loadManifest(manifest);

            stage.update();

			createjs.Ticker.setFPS(30);
	        createjs.Ticker.addListener(stage);
        }

        function stop() {
	        createjs.Ticker.removeListener(window);
	        if (preload != null) { preload.close(); }
        }

        function handleProgress(event) {
            bar.scaleX = (event.loaded)*(loaderWidth);
        }

        function handleFileLoad(event) {
            var img = new Image();
            img.src = event.src;
            img.onload = handleLoadComplete;
        }

        function handleLoadComplete(event) {

        
            update = true;
            totalLoaded += 1; 


            if (totalLoaded == manifest.length) {
                update = false;
				console.log("yeeeahh")
				initFirstPage()
                stage.update();
            }
        }  

        function handlePress(event) {
            currentItem = event.target.parent;
            update = true;
            createjs.Tween.get(currentItem).to({y:-350}, 200).call(tweenUpComplete);
        }

        function tweenUpComplete() {
            imageContainer.addChildAt(currentItem, 0);
            createjs.Tween.get(currentItem).to({y:0}, 500).call(tweenDownComplete);
        }

        function tweenDownComplete() {
            stage.update();
            update = false;
        }

        function handleMove(event) {
            currentItem.x = event.stageX+offset.x;
            currentItem.y = event.stageY+offset.y;
            stage.update();
        }

        function handleComplete(event) {                        
            loaderBar.visible = false;  
        }

   
