var test = require('tape').test; // assign the tape library to the variable "test"
var square = require('../testfunctions')
test('should return 9 when input 3', function (t) {
  var actual = square(3);
  var expected = 9
  t.equal(actual, expected); // passes
  t.end();
});
