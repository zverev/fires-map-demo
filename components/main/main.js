cm.define('config', [], function(cm, cb) {
    $.ajax('resources/config.json').then(function(config) {
        cb(config)
    });
});

cm.define('mapApplication', ['config'], function(cm, cb) {
    var config = cm.get('config');
    var macm = nsGmx.createGmxApplication(document.body, config);
    macm.create().then(function() {
        cb(macm);
    });
});

cm.define('map', ['mapApplication'], function(cm) {
    return cm.get('mapApplication').get('map');
});

cm.define('layersHash', ['mapApplication'], function(cm) {
    return cm.get('mapApplication').get('layersHash');
});

cm.define('layersTree', ['mapApplication'], function(cm) {
    return cm.get('mapApplication').get('layersTree');
});

cm.define('widgetsContainerControl', ['mapApplication'], function(cm) {
    return cm.get('mapApplication').get('widgetsContainerControl');
});

cm.define('calendarModel', ['mapApplication'], function(cm) {
    return cm.get('mapApplication').get('calendar');
});

cm.define('yearButtonsWidget', ['calendarModel', 'widgetsContainerControl'], function(cm) {
    var calendarModel = cm.get('calendarModel');
    var widgetsContainerControl = cm.get('widgetsContainerControl');
    var yearButtonsWidget = new nsGmx.YearButtonsWidget({
        calendarModel: calendarModel,
        years: [2010, 2011, 2012, 2013, 2014, 2015]
    });
    yearButtonsWidget.appendTo(widgetsContainerControl.getContainer());
    return null;
});

cm.define('zoomHintControl', ['map', 'layersHash', 'layersTree'], function(cm) {
    var map = cm.get('map');
    var layersHash = cm.get('layersHash');
    var layersTree = cm.get('layersTree');

    var zoomHintControl = new nsGmx.ZoomHintControl({
        layersTree: layersTree,
        layersHash: layersHash,
        layers: ['F2840D287CD943C4B1122882C5B92565']
    });

    zoomHintControl.addTo(map);

    return zoomHintControl;
});

cm.define('globals', ['mapApplication'], function(cm) {
    var macm = window.macm = cm.get('mapApplication');
    window.blm = macm.get('baseLayersManager');
    window.blc = macm.get('baseLayersControl');
    window.lt = macm.get('layersTree');
    window.lh = macm.get('layersHash');
    window.ld = new nsGmx.LayersDebugger(macm.get('layersTree'));
    return null;
});

cm.create().then(function() {
    console.log('ready');
});