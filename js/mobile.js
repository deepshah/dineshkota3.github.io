//document.addEventListener('touchstart', handleTouchStart, false);        
//document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;            

d = document.getElementsByClassName("buddy");
count = d.length;               

for(var i = 0;i<d.length;i++){
	  d[i].addEventListener('touchstart', handleTouchStart, false);        
		d[i].addEventListener('touchmove', handleTouchMove, false); 
	}                         
                                                     

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                                                         
    yDown = evt.touches[0].clientY;
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;                                    
    

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
   

         if ( xDiff > 20 ) {
            swipeLeft();
        } else if (xDiff < -20 ) {
            swipeRight();
        } else if (yDiff > 20 ) {
            swipeRight();
        } else if (yDiff < -20 ) {
            swipeLeft();
        }                       

    /* reset values */
    xDown = null;
                                             
};
