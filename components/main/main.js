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

cm.define('globals', ['mapApplication'], function(cm) {
	var macm = window.macm = cm.get('mapApplication');
	window.blm = macm.get('baseLayersManager');
	window.blc = macm.get('baseLayersControl');
	window.lt = macm.get('layersTree');
	window.ld = new nsGmx.LayersDebugger(macm.get('layersTree'));
	return null;
});

cm.create().then(function() {
	console.log('ready');
});