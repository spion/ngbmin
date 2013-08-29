
var through = require('through'),
    falafel = require('falafel'),
    match   = require('./match');

module.exports = function(browserify) {
   // browserify v1
    if (browserify.register) 
        return browserify.register('js', compile);
    // browserify v2
    var file = browserify, data = '';
    if (!/\.js$/.test(file)) 
       return through();
    return through(function write(buf) {
        data += buf;
    }, function end() {
        this.queue(compile(data));
        this.queue(null);
    });

};

var compile = module.exports.compile = function compile(content) {
    var output = falafel(content, function(node) {
        if (match({
            type: 'FunctionExpression',
            id: { name: /\$ng$/ }
        }, node)) {
            node.update(transform(node));
        }
    });
    return output.toString();
}

function transform(fn) {
    var dependencies = fn.params
        .map(function(p) { return p.name; });
    var arr = dependencies.map(function (d) { 
        return "'" + d + "'"; 
    });
    arr.push(fn.source());
    var arrayForm = '[' + arr.join(', ') + ']';
    return arrayForm;
}

