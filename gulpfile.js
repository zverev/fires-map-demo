var gulp = require('gulp');
var path = require('path');

var jquery = {
    bowerComponent: 'jquery',
    distFiles: ['dist/jquery.js']
};

var jqueryui = {
    bowerComponent: 'jquery-ui',
    distFiles: ['jquery-ui.js']
};

var leaflet = {
    bowerComponent: 'leaflet',
    distFiles: [
        'dist/leaflet-src.js',
        'dist/leaflet.css',
        'dist/images/layers.png',
        'dist/images/layers-2x.png',
        'dist/images/marker-icon.png',
        'dist/images/marker-icon-2x.png',
        'dist/images/marker-shadow.png'
    ]
};

var leafletGeomixer = {
    id: 'Leaflet-GeoMixer',
    srcDir: './external/Leaflet-GeoMixer',
    distFiles: ['./dist/leaflet-geomixer-src.js'],
    build: true,
    watch: false
};

var gmxControls = {
    id: 'gmxControls',
    srcDir: './external/gmxControls',
    distFiles: [
        './dist/gmxControls-src.js',
        './dist/css/gmxControls.css',
        './dist/css/img/band.png',
        './dist/css/img/coords.png',
        './dist/css/img/gmxSprite.png',
        './dist/css/img/logo_footer.png',
        './dist/css/img/logo_footer_color.png'
    ],
    build: true,
    watch: false
};

var tileLayerMercator = {
    id: 'Leaflet.TileLayer.Mercator',
    srcDir: './external/Leaflet.TileLayer.Mercator',
    distFiles: ['./src/TileLayer.Mercator.js'],
    build: false,
    watch: false
};

var gmxBaseLayersManager = {
    id: 'Leaflet.gmxBaseLayersManager',
    srcDir: './external/Leaflet.gmxBaseLayersManager',
    distFiles: [
        './src/gmxBaseLayersManager.js',
        './src/initBaseLayerManager.js'
    ],
    build: false,
    watch: false
};

var underscore = {
    bowerComponent: 'underscore',
    distFiles: ['underscore.js']
};

var backbone = {
    bowerComponent: 'backbone#1.1.2',
    distFiles: ['backbone.js']
};

var handlebars = {
    bowerComponent: 'handlebars',
    distFiles: ['handlebars.js']
};

var markercluster = {
    bowerComponent: 'leaflet.markercluster',
    distFiles: ['dist/MarkerCluster.css', 'dist/leaflet.markercluster.js']
};

var heatmap = {
    id: 'Heatmap',
    srcDir: './components/Heatmap',
    distDir: 'build',
    build: true
};

var translations = {
    id: 'translations',
    url: 'http://maps.kosmosnimki.ru/api/translations.js'
};

var sidebar = './external/GMXCommonComponents/IconSidebarWidget';
var gmxWidget = './external/GMXCommonComponents/GmxWidget';
var animationHelpers = './external/GMXCommonComponents/AnimationHelpers';
var switchingCollectionWidget = './external/GMXCommonComponents/SwitchingCollectionWidget';
var commonstyles = './external/GMXCommonComponents/CommonStyles@build';
var popover = './external/GMXCommonComponents/Popover@build';
var scrollview = './external/GMXCommonComponents/ScrollView@build';
var dropdownmenuwidget = './external/GMXCommonComponents/DropdownMenuWidget@build';
var headerwidget = './external/GMXCommonComponents/HeaderWidget@build';
var authwidget = './external/GMXCommonComponents/AuthWidget@build';
var authmanager = './external/GMXCommonComponents/AuthManager@build';
var alertwidget = './components/AlertWidget@build';
var layersdebugger = './external/GMXCommonComponents/LayersDebugger';
var iconLayers = './external/Leaflet-IconLayers@dist';
var gmxIconLayers = './external/GMXCommonComponents/gmxIconLayers';
var languagewidget = './external/GMXCommonComponents/LanguageWidget@build';
var drawingobjectslistwidget = './external/GMXCommonComponents/DrawingObjectsListWidget@build';
var calendarcontainer = './components/CalendarContainer';
var calendarwidget = './external/GMXCommonComponents/CalendarWidget@build';
var layerstree = './external/GMXCommonComponents/LayersTree@build';
var layersTreeWidget = './external/GMXCommonComponents/LayersTreeWidget@build';
var componentsmanager = './external/GMXCommonComponents/ComponentsManager';
var winnieCore = {
    id: 'winnie',
    srcDir: './external/winnie',
    distDir: './core',
    build: false
};
var statemanager = './external/GMXCommonComponents/StateManager';
var utils = './external/GMXCommonComponents/Utils';

var main = './components/main';

require('./external/GMXBuilder')(gulp, {
    tempDir: './temp',
    distDir: './dist',
    htmlDistDir: './',
    watchExtensions: ['.js', '.css', '.html', '.less', '.svg']
}, [{
    id: 'index',
    htmlfile: './html/index.html',
    components: [
        jquery,
        jqueryui,
        leaflet,
        leafletGeomixer,
        gmxControls,
        tileLayerMercator,
        gmxBaseLayersManager,
        underscore,
        backbone,
        handlebars,
        markercluster,
        heatmap,
        translations,
        gmxWidget,
        animationHelpers,
        switchingCollectionWidget,
        commonstyles,
        popover,
        utils,
        sidebar,
        scrollview,
        layersdebugger,
        iconLayers,
        gmxIconLayers,
        calendarwidget,
        layerstree,
        layersTreeWidget,
        componentsmanager,
        statemanager,
        winnieCore,
        main
    ]
}]);
