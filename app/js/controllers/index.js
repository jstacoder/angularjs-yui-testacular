YUI.add('controllers', function(Y) {
    var controllers  = angular.module('controllers',[]);
    Y.namespace('org').controllers = controllers;
}, '', {
    requires: [
        'angular'
    ]
});
