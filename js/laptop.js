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
    
     
}, false);
element.addEventListener("mouseup", function(upevent){
	//fucntion executes when the mouse is up
    x_up = upevent.clientX;
    
    
    if((x_down - x_up)>20){
		//when swiped left
		d[count-1].innerHTML = d[count-1].innerHTML + '<div class="status dislike">Dislike!</div>';
		
		d[count -1].className += " rotate-right";
		count = count - 1;
		
		
	}
	else if((x_down - x_up)<-20){
		//when swiped right
		d[count-1].innerHTML = d[count-1].innerHTML + '<div class="status like">Like!</div>';
		d[count -1].className += " rotate-left";
		var url = d[count -1].getAttribute("href");
		count = count - 1;
		setTimeout(function(){window.location = url;}, 1000);
		
		
	}
}, false);

