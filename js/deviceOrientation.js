// JavaScript Document

function readDeviceOrientation() {

    switch (window.orientation) {  
    case 0:  
    
        // Portrait 
		alert("portrait")
        break; 
        
    case 180:  
    
        // Portrait (Upside-down)
		console.log("portrait upside down")
        break; 
  
    case -90:  
    
        // Landscape (Clockwise)
		alert("landscape clock")
        break;  
  
    case 90:  
    
        // Landscape  (Counterclockwise)
		console.log("landscape anti")
        break;
    }
}