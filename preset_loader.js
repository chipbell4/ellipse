var PresetLoader = (function() {

    var presets = {};
    
    // "line" preset
    var x = function(t) { return 400 + 100 * t; };
    var y = function(t) { return 300; };
    presets.line = Preset.buildPreset(x, y, 50);

    // "sine" preset
    x = function(t) { return 400 + 200 * t; };
    y = function(t) { return 300 + 50 * Math.sin(t / (2 * Math.PI) * 40); };
    presets.sine = Preset.buildPreset(x, y, 200);

    // "circle" preset
    x = function(t) { return 300 + 200 * Math.sin(t * 2 * Math.PI); };
    y = function(t) { return 300 + 200 * Math.cos(t * 2 * Math.PI); };
    presets.circle = Preset.buildPreset(x, y, 300);

    return {
        init: function() {
            Preset.loadPreset(presets.circle);
        }
    };
})();
