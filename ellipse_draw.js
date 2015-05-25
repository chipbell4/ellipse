var EllipseDraw = (function() {

    var currentPoints = [];

    return {
        init: function() {
        },

        pointsChanged: function(points) {
            currentPoints = points;
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
