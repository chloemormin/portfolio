 document.onmousemove = suitsouris;
        var width = $(window).width();
        var height = $(window).height();

        function suitsouris(evenement) {
            if (navigator.appName == "Microsoft Internet Explorer") {
                var x = width - event.x + document.body.scrollLeft;
                var y = event.y + document.body.scrollTop;
            }
            else {
                var x = evenement.pageX;
                var y = evenement.pageY;
            }
            document.getElementById("image_suit_souris").style.left = width / 2 + (x * 0.2 - 1000) + 'px';
            if (y < 900) {
                document.getElementById("image_suit_souris").style.top = height / 2 + (y * 0.2) + 'px';
            }
        }
