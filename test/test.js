var test = require('tape').test; // assign the tape library to the variable "test"
const testFolder = '../submission/';
const fs = require('fs');
var leaderboard = new Array();
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
    leaderboard.push([end - start, name]) //calculate the complexity by subtracting start time from end time
  }
})

leaderboard.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

for(i = 0; i < leaderboard.length; i++){
    console.log(leaderboard[i][1] + " score is " + leaderboard[i][0]);
}

console.log()