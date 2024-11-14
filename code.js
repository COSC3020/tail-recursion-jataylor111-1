function tailRecFib(n) { return doFib(n, 1, 0); }

function doFib(n, b, acc) {
    // Once n is zero return the result
    if(n == 0) return acc;
    // I had the right idea but I was sending the wrong parts to the wrong declarations
    else return doFib(n - 1, b + acc, b); 
}


// n = 15;
// console.log(tailRecFib(n));
