var test = require('tape').test; // assign the tape library to the variable "test"
const testFolder = '../submission/';
const fs = require('fs');
fs.readdirSync(testFolder).forEach(file => { //go through all the files in the folder
  var parts = file.split('.');
  var ext = parts[parts.length - 1]; //get the extension and name
  var name = parts[parts.length - 2];
  if(ext.toLowerCase() == 'js') //check if the file is .js format
    var square = require(testFolder + name); //get function
    if((testFolder+name).split('/')[parts.length] != ''){ //check the function name is not null
    console.log();
    test('should return 9 when input 3', function (t) { //test
      var actual = square(3);
      var expected = 9
      t.equal(actual, expected); // passes
      t.end();
    });
    var start = new Date().getTime();
    for (i = 1; i <= 1e7; i++) //run the function 10 million times
      square(3);
    var end = new Date().getTime();
    console.log(end - start) //calculate the complexity by subtracting start time from end time
  }
})
