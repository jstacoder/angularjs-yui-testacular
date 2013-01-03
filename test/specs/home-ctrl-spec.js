YUI.add('home-ctrl-spec', function(Y) {
    describe('home-ctrl', function () {
        describe('init', function() {
            it('should exist', function() {
                should.exist(Y.controllers.HomeCtrl);
            });
        });
    });
}, '', {
    requires: ['home-ctrl']
});
