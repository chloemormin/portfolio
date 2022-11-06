document.onmousemove = suitsouris;
document.onscroll = suiscroll;

    
var width = $(window).width();
var height = $(window).height();

if (width < 1200) {
    document.getElementById("image_suit_souris").style.display = 'none';
} else {
    document.getElementById("image_suit_souris").style.display = 'block';
}

function suitsouris(evenement) {
    var x = 0;
    var y = 0;

    if (navigator.appName == "Microsoft Internet Explorer") {
        x = width - event.x + document.body.scrollLeft;
        y = event.y + document.body.scrollTop;
    }
    else 
    {
        x = evenement.pageX;
        y = evenement.pageY;
    }
    
    document.getElementById("image_suit_souris").style.left = width / 2 + (x * 0.2 - 1000) + 'px';
    if (y < 900) {
        document.getElementById("image_suit_souris").style.top = height / 2 + (y * 0.2) + 'px';
    }
}

function suiscroll(evenement) {
    if (evenement.path[1].pageYOffset > 900) {
        document.getElementById("image_suit_souris").style.display = 'none';
    } else {
        document.getElementById("image_suit_souris").style.display = 'block';
    }
}