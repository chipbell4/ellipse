var EllipseDraw = (function() {

    return {
        init: function() {
            Draw.onpointschanged = this.redrawEllipse;
        },

        redrawEllipse: function(points) {
            // calculate points on the ellipse
            var edgePoints = Ellipse.edgePointsOfEllipse(points, Radius.currentValue());

            // now draw them
            var drawBlue = function(point) { Draw.drawPoint(point, 'blue'); };
            edgePoints.forEach(drawBlue);
        },
    }
})();
