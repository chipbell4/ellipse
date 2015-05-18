var Draw = (function() {

    var canvas, clearButton, context;

    var mouseIsDown = false;
    var currentPoints = [];

    return {
        /**
         * Setup function. Hooks up the event listeners for drawing and clearing the drawing
         */
        init: function() {
            canvas = document.getElementById('canvas');
            context = canvas.getContext('2d');
            clearButton = document.getElementById('clear');

            canvas.onmousedown = this.mouseDown;
            canvas.onmousemove = this.mouseMoved.bind(this);
            canvas.onmouseup = this.mouseUp;
            canvas.onmouseout = this.mouseUp;

            clearButton.onclick = this.resetPoints.bind(this);
        },

        /**
         * Clears the current point list and redraws
         */
        resetPoints: function() {
            currentPoints = [];
            context.clearRect(0, 0, 1000, 1000);
            this.render();
        },

        /**
         * Triggered when the mouse is clicked down, enabling drawing
         */
        mouseDown: function(event) {
            mouseIsDown = true;
        },

        /**
         * Triggered when the mouse is moved, adding points to the list
         */
        mouseMoved: function(event) {
            // Only draw if the mouse is down
            if (!mouseIsDown) {
                return;
            }

            currentPoints.push({
                x: event.pageX - canvas.offsetLeft,
                y: event.pageY - canvas.offsetTop
            });

            this.render();
        },

        /**
         * Triggered when the mouse is let up, stopping drawing mode
         */
        mouseUp: function(event) {
            mouseIsDown = false;
        },

        /**
         * Draws the point list
         */
        render: function() {
            context.fillStyle = 'black';
            currentPoints.forEach(this.drawPoint);
        },

        /**
         * Draws a single point
         */
        drawPoint: function(point, color) {
            if(color) {
                context.fillStyle = color;
            }

            context.fillRect(point.x, point.y, 2, 2);
        }
    };
})();
