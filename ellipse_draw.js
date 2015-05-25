var EllipseDraw = (function() {

    var currentPoints = [];

    return {
        init: function() {
            Draw.onpointschanged = this.pointsChanged.bind(this);
            document.getElementById('radius').oninput = this.render.bind(this);
        },

        pointsChanged: function(points) {
            currentPoints = points;
            this.render();
        },

        render: function() {
            // calculate points on the ellipse
            var edgePoints = Ellipse.edgePointsOfEllipse(currentPoints, Radius.currentValue());

            // now draw them
            var drawBlue = function(point) { Draw.drawPoint(point, 'blue'); };
            edgePoints.forEach(drawBlue);
        },
    }
})();
