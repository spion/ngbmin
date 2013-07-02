var t = require('tap');
var bng = require('../ngbrowserify.js').compile;

t.test('automatic recognition', function(t) {
    var res = bng("app.factory('lol', function ($svc1, $svc2) {})");
    t.equal(res.toString(), "app.factory('lol', ['$svc1', '$svc2', function ($svc1, $svc2) {}])");
    t.end();
});

t.test('recognition by function name', function(t) {
    var res = bng("var blah = function inject$ng($svc1, $svc2) {};");
    t.equal(res.toString(), "var blah = ['$svc1', '$svc2', function inject$ng($svc1, $svc2) {}];");
    t.end();
});

t.test('automatic recognition with fn name', function(t) {
    var res = bng("app.factory('lol', function inject$ng($svc1, $svc2) {})");
    t.equal(res.toString(), "app.factory('lol', ['$svc1', '$svc2', function inject$ng($svc1, $svc2) {}])");
    t.end();
});


