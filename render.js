var Render = (function() {
    return {
        init: function() {
            Draw.onpointschanged = _.debounce(this.pointsChanged.bind(this), 10);
            document.getElementById('radius').addEventListener('input', _.debounce(this.redraw.bind(this), 10));
        },

        pointsChanged: function(points) {
            EllipseDraw.pointsChanged(points);
            this.redraw();
        },
        
        redraw: function() {
            Draw.clear();
            Draw.render();
            EllipseDraw.render();
        }
    };
})();
