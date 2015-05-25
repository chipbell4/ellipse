var Render = (function() {
    return {
        init: function() {
            Draw.onpointschanged = this.pointsChanged.bind(this);
            document.getElementById('radius').oninput = this.redraw.bind(this);
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
