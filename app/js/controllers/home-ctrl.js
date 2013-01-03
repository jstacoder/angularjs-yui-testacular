YUI.add('home-ctrl', function(Y) {
    Y.namespace('controllers').HomeCtrl = function($scope) {

    };

    Y.org.controllers.controller('home', Y.controllers.HomeCtrl);
    
}, '', {
    requires: [
        'controllers'
    ]
});
