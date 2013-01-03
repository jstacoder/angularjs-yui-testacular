__testacular__.loaded = function(){};

YUI({
    base: '/base'
    ,modules: {
        angular: {
            path: '/app/libs/angular-1.1.1/angular.js',
            async: false
        }
        ,chai: {
            path: '/test/libs/chai/chai.js',
            async: false
        }
//        ,config: {
//            path: '/app/js/cfg.js',
//            requires: ['angular']
//        }
//        ,'filters': {
//            path: '/app/js/filters/index.js',
//            requires: ['angular']
//        }
        ,'controllers': {
            path: '/app/js/controllers/index.js'
            ,requires: ['angular']
        }
//        ,services: {
//            path: '/app/js/services/index.js',
//            requires: ['angular', 'angular-resource']
//        }
        ,org: {
            path: '/app/js/org.js',
            requires: [
                'angular'
                ,'controllers'
            ]
        }
        ,'home-ctrl': {
            path: '/app/js/controllers/home-ctrl.js'
            ,requires: [
                'controllers'
            ]
        }
        ,'home-ctrl-spec': {
            path: '/test/specs/home-ctrl-spec.js'
            ,requires: [
                'home-ctrl'
            ]
        }

    }
}).use([
    'chai'
    ,'home-ctrl-spec'
], function(Y) {
    dump('starting specs');
    window.expect = chai.expect;
    window.should = chai.should();
    return window.__testacular__.start();
});
