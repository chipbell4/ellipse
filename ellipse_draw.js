var EllipseDraw = (function() {

    var currentPoints = [];

    return {
        init: function() {
        },

        pointsChanged: function(points) {
            currentPoints = points;
            console.log(currentPoints.length);
        },

        fociCount: function() {
            return currentPoints.length;
        },

        render: function() {
            // calculate points on the ellipse, relative to the number of points
            var edgePoints = Ellipse.edgePointsOfEllipse(currentPoints, Radius.currentValue() * this.fociCount());

            // now draw them
            var drawBlue = function(point) { Draw.drawPoint(point, 'blue'); };
            edgePoints.forEach(drawBlue);
        },
    }
})();
