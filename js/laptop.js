var x_down = 0;
var x_up = 0;
var count;
var element = 0;
var d = 0;
d = document.getElementsByClassName("buddy");
count = d.length;
element = document;



element.addEventListener("mousedown", function(event){
	//function to know where the mouse is down
     x_down = event.clientX;
     y_down = event.clientY;
    
     
}, false);
element.addEventListener("mouseup", function(upevent){
	//fucntion executes when the mouse is up
    x_up = upevent.clientX;
    y_up = upevent.clientY;
    
    
    if((x_down - x_up)>20){
		//when swiped left
		swipeLeft();
	}
	else if((x_down - x_up)<-20){
		swipeRight();		
	}
	else if ((y_down - y_up)>20){
		swipeRight();
	}
	else if((y_down - y_up)<-20){
		swipeLeft();		
	}
}, false);