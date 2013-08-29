var t = require('tap');
var bng = require('../ngbrowserify.js').compile;

t.test('recognition by function name', function(t) {
    var res = bng("var blah = function inject$ng($svc1, $svc2) {};");
    t.equal(res.toString(), "var blah = ['$svc1', '$svc2', function inject$ng($svc1, $svc2) {}];");
    t.end();
});


