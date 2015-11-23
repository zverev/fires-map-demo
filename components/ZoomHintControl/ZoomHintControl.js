var nsGmx = nsGmx || {};

nsGmx.Translations.addText('rus', {
    'zoomHintControl': {
        'zoomInPls': 'приблизьте карту для загрузки данных о пожарах'
    }
});

nsGmx.Translations.addText('eng', {
    'zoomHintControl': {
        'zoomInPls': 'zoom in to load fires data'
    }
});

nsGmx.ZoomHintControl = L.Control.extend({
    className: 'zoomHintControl',
    options: {
        position: 'bottomright',
        layers: [],
        layersHash: {},
        layersTree: undefined
    },
    initialize: function(options) {
        L.setOptions(this, options);
    },
    onAdd: function(map) {
        this._container = L.DomUtil.create('div', this.className);
        this.render();
        map.on('zoomend', this.render.bind(this));
        return this._container;
    },
    render: function() {
        //this._container.innerHTML = '';
        L.DomUtil.removeClass(this._container, 'zoomHintControl-active');
        var hint = this._getHint();
        if (hint) {
            L.DomUtil.addClass(this._container, 'zoomHintControl-active');
            this._container.innerHTML = hint;
        }
    },
    _getHint: function() {
        var currZoom = this._map.getZoom();
        var layers = this.options.layers;
        for (var i = 0; i < layers.length; i++) {
            if (currZoom < this.options.layersHash[layers[i]].options.minZoom) {
                return nsGmx.Translations.getText('zoomHintControl.zoomInPls');
            }
        }
    }
});