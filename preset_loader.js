var PresetLoader = (function() {

    var presets = {};
    
    // "line" preset
    var x = function(t) { return 400 + 100 * t; };
    var y = function(t) { return 300; };
    presets.line = Preset.buildPreset(x, y, 50);

    // "sine" preset
    var x = function(t) { return 400 + 100 * t; };
    var y = function(t) { return 300 + 50 * Math.sin(t / 100); };
    presets.sine = Preset.buildPreset(x, y, 50);

    return {
        init: function() {
            Preset.loadPreset(presets.line);
        }
    };
})();
