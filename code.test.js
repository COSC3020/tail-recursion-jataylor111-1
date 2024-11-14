const fs = require('fs')
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

// Zero
assert(tailRecFib(0) === 0);

// standard small value
assert(tailRecFib(5) === 5);

// Large value
assert(tailRecFib(15) === 610);

// Very large value
assert(tailRecFib(50) === 12586269025);

console.log("All Tests Passed");
