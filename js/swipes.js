function swipeRight() {
        //when swiped right
        d[count-1].innerHTML = d[count-1].innerHTML + '<div class="status like">Like!</div>';
        d[count -1].className += " rotate-left";
        var url = d[count -1].getAttribute("href");
        count = count - 1;
        setTimeout(function(){window.location = url;}, 1000);

}

function swipeLeft() {
        d[count-1].innerHTML = d[count-1].innerHTML + '<div class="status dislike">Dislike!</div>';
        
        d[count -1].className += " rotate-right";
        count = count - 1;
}