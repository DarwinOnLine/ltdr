/* global FloatLabels Typed */
(function() {
    "use strict";


    // Floating labels
    var floatlabels = new FloatLabels( "form", {
        style: 2
    });
    
    window.onorientationchange = function() {
        document.body.scrollTop = 0;
    };

    window.ontouchmove = function() {
        return false;
    };

    window.onload = function() {
        
    };
})();