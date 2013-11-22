/* exported app */
'use strict';

var app = angular.module('sensor', ['ngRoute','sensor.main', 'sensor.components']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/main',       { controller: 'SensorCtrl',    templateUrl: 'partials/sensor/main.html' })
    .when('/orientation',       { controller: 'OrientationCtrl',    templateUrl: 'partials/sensor/orientation.html' })
    .when('/devicemotion',       { controller: 'DeviceMotionCtrl',    templateUrl: 'partials/sensor/devicemotion.html' })
    .when('/proximity',       { controller: 'ProximityCtrl',    templateUrl: 'partials/sensor/proximity.html' })
    .when('/light',       { controller: 'LightCtrl',    templateUrl: 'partials/sensor/light.html' })
    .when('/usermedia',       { controller: 'UserMediaCtrl',    templateUrl: 'partials/sensor/usermedia.html' })
    .when('/vibration',       { controller: 'VibrationCtrl',    templateUrl: 'partials/sensor/vibration.html' })
    .when('/webspeech',       { controller: 'WebSpeechCtrl',    templateUrl: 'partials/sensor/webspeech.html' })
    .otherwise(                     { redirectTo:  '/main' });
    ;
}]);