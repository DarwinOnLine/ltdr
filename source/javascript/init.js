/* global FloatLabels tns */
(function() {
    "use strict";

    // Floating labels
    var floatlabels = new FloatLabels( "form", {
        style: 2
    });

    var slider = tns({
        container: '.reassurance-slider',
        responsive: {
            0: {
                autoplay: true,
                items: 1,
                nav: true
            },
            768: {
                disable: true
            }
        }
    })
    
    window.onorientationchange = function() {
        document.body.scrollTop = 0;
    };

    window.ontouchmove = function() {
        return false;
    };

    window.onload = function() {
        
    };
})();