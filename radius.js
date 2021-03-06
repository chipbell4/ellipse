var Radius = (function() {
    var slider, label;

    return {
        /**
         * Setup code for the radius slider
         */
        init: function() {
            slider = document.getElementById('radius');
            label = document.getElementById('radius-value');
            slider.addEventListener('input', this.updateLabel);
        },

        /**
         * Gets the current value of the radius slider
         */
        currentValue: function() {
            return Number(slider.value);
        },

        /**
         * Sets the current value of the radius slider
         */
        setValue: function(newValue) {
            return slider.value = newValue;
        },

        /**
         * Callback for when the label is updated
         */
        updateLabel: function() {
            label.innerHTML = (Number(slider.value) * EllipseDraw.fociCount()).toPrecision(4);
        } 
    };
})();
