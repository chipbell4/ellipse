var EllipseDraw = (function() {

    return {
        init: function() {
            Draw.onpointschanged = this.onPointsChanged;
        },

        onPointsChanged: function(points) {
            console.log('CHANGED'); 
        },
    }
})();
