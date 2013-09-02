(function() {

var image = function(thisX, thisY, asset,fade,delay,swipeable) {
  this.initialize(thisX, thisY, asset,fade,delay,swipeable);
}
var p = image.prototype = new createjs.Container(); // inherit from Container

	
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
	var _asset=asset;
	this.delay=delay;
	this.fade=fade;
	this.swipeable = swipeable;
	this.getAsset = function(){return _asset};//getter
	var imageSRC= new createjs.Bitmap(asset);
	
	
	
    imageSRC.name=asset;
	this.addChild(imageSRC);
	
	imageSRC.x = thisX;
	imageSRC.y = thisY;

	
	
	///fade animation
	if (fade==true){
	imageSRC.alpha=0;
	TweenLite.to(imageSRC, .5, {alpha:1, delay:delay});
	//console.log(fade);
	}

}//end p function


//image.prototype.onClick = function() {
//console.log("this image is" +  this.asset);	
//}

 image.prototype.onTouchStart =function(e)
{
	
	
	//prevent default so iOS doesnt try to scale / move page
	e.preventDefault();

	//check and see if this is the first touch point
	if(touchID == -1)
	{
		//if not, get the touch
		var touch = e.changedTouches[0];

		//store the touch id
		touchID = touch.identifier;
//alert("aaa");
		//unpause eveything
		Tick.setPaused(false);

		//start listening for the touch move event
		mainCanvas.ontouchmove = onTouchMove;
	}
}

///end touchstart

function onTouchEnd(e)
{
	//prevent default so iOS doesnt try to scale / move page
	e.preventDefault();

	//get a list of all the touch points that changed
	var changedTouches = e.changedTouches;

	//get the number of changed touch points
	var len = changedTouches.length;

	//loop through the changed touch points
	for(var i = 0; i < len; i++)
	{
		//check and see if any of the ended touch points
		//were the first touch point we began to track
		if(changedTouches[i].identifier == touchID)
		{
			//if so, then pause everything
			Tick.setPaused(true);

			//clear touchID
			touchID = -1;

			//stop listening for the touch move event
			mainCanvas.ontouchmove = null;

			return;
		}
	}
}

//called on when a touch points moves (used on iOS / Android)
//devices.
//Note, Android only supports single touch. If there are multiple touch
//points, touchmove events will not be broadcast.
function onTouchMove(e)
{
	//prevent default so iOS doesnt try to scale / move page
	e.preventDefault();

	//get all of the touch points that changed / moved
	var changedTouches = e.changedTouches;

	//get the number of changed touch points
	var len = changedTouches.length;

	var touch;

	//whether we found the first touch point that we are tracking
	var found = false;

	//loop through all of the changed touch points
	for(var i = 0; i < len; i++)
	{
		touch = changedTouches[i];

		//is this the touch point we are tracking?
		if(touch.identifier == touchID)
		{
			//yes
			found = true
			break;
		}
	}

	if(!found)
	{
		//if we didnt find it, it means that the first touch point, that
		//we are tracking did not changed / move. Instead, a second touch point
		//which we dont care about moved.
		return;
	}

	//copy the coordinates into a temp object
	tempData.pageX = touch.pageX;
	tempData.pageY = touch.pageY;

	//update mouse / position coordinates
	updateMouseCoordinates(tempData);
}





window.image = image;
}());