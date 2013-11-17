/* exported app */
'use strict';

var app = angular.module('sensor', ['sensor.main', 'sensor.components']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/main',       { controller: 'SensorCtrl',    templateUrl: 'partials/sensor/main.html' })
    .when('/orientation',       { controller: 'OrientationCtrl',    templateUrl: 'partials/sensor/orientation.html' })
    .when('/devicemotion',       { controller: 'DeviceMotionCtrl',    templateUrl: 'partials/sensor/devicemotion.html' })
    .when('/webaudio',       { controller: 'WebAudioCtrl',    templateUrl: 'partials/sensor/webaudio.html' })
    .when('/usermedia',       { controller: 'UserMediaCtrl',    templateUrl: 'partials/sensor/usermedia.html' })
    .when('/vibration',       { controller: 'VibrationCtrl',    templateUrl: 'partials/sensor/vibration.html' })
    .when('/webspeech',       { controller: 'WebSpeechCtrl',    templateUrl: 'partials/sensor/webspeech.html' })
    ;
}]);