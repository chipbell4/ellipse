var Ellipse = (function() {
    return {
        /**
         * How close a point must be to the edge to be considered the edge
         */
        edgeTolerance: 1,

        /**
         * Determines the euclidean distance between two points
         */
        distanceBetweenPoints: function(point1, point2) {
            var dx = point1.x - point2.x;
            var dy = point1.y - point2.y;

            return Math.sqrt( (dx * dx) + (dy * dy) );
        },

        /**
         * Determines if a point falls on the edge of the ellipse defined by the provided set of foci with the given
         * radius
         */
        pointOnEdge: function(point, foci, radius) {
            var that = this;
            var totalDistance = foci.reduce(function(totalDistance, currentFocus) {
                return totalDistance + that.distanceBetweenPoints(point, currentFocus);
            }, 0);

            return Math.abs(radius - totalDistance) < this.edgeTolerance;
        },

        /**
         * Returns all edge points of the ellipse
         */
        edgePointsOfEllipse: function(foci, radius) {
            var edgePoints = [];
            for(var x = 0; x < 800; x++) {
                for(var y = 0; y < 600; y++) {
                    var point = { x: x, y: y };
                    if(this.pointOnEdge(point, foci, radius)) {
                        edgePoints.push(point);
                    }
                }
            }

            return edgePoints;
        },
    };
})();
