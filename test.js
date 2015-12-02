var fs = require('fs');
var inline = require('./index');

var html = fs.readFileSync('./fixtures/test.html');

inline(html, { base: __dirname + '/fixtures' }, function(html) {
  console.log(html);
});