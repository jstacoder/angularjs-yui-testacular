YUI.add('org', function(Y) {
    Y.namespace('org').main = angular.module('org', [
        'controllers'
    ]);

}, '', {
    requires: [
        'angular'
        ,'controllers'
    ]
});
