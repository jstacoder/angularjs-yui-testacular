YUI({
     base: ''
    , debug: true
    , lang: 'en-US'
    , modules: {
       /*deps*/ 
        'angular': {
            path: '/libs/angular-1.1.1/angular.js'
            , async: false
            , requires: []
        }
        /*app*/
        ,'org': {
            path: 'js/org.js'
            ,requires: [
                'angular'
            ]
        }
        ,'controllers': {
            path: 'js/controllers/index.js'
            ,requires: [
                'angular'
            ]
        }
        ,'home-ctrl': {
            path: 'js/controllers/home-ctrl.js'
            ,requires: [
                'controllers'
            ]
        }
    }
    
}).use(['node', 'org', 'home-ctrl'], function(Y) {
    Y.on('domready', function() {
        Y.org.main.config(function($routeProvider, $locationProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/home.html'
                ,controller: 'home'
            });
        });

        angular.bootstrap(Y.one('.org-ng').getDOMNode(), [
            'org'
        ]);
    });
});
