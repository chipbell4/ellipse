var Preset = (function() {
    return {
        /**
         * Builds a preset to work with, a list of foci, and a preferred radius
         *
         * @param x A function providing the x values for 0 < t < 1
         * @param y A function providing the y values for 0 < t < 1
         * @param radius The radius to use
         */
        buildPreset: function(x, y, radius) {
            var t = _.range(0, 1.01, 0.05);

            var xValues = t.map(x);
            var yValues = t.map(y);
            var foci = _.zip(xValues, yValues).map(function(coordinates) {
                return {
                    x: coordinates[0],
                    y: coordinates[1],
                };
            });

            return {
                foci: foci,
                radius: radius
            };
        },

        loadPreset: function(preset) {
            // load the radius
            Radius.setValue(preset.radius);

            // load the foci
            Draw.resetPoints(preset.foci);
            EllipseDraw.pointsChanged(preset.foci);

            Radius.updateLabel();

            // redraw
            Render.redraw();
        },
    };
})();
