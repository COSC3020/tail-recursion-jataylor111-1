function tailRecFib(n) { return doFib(n, 1, 0); }

function doFib(n, b, acc) {
    if(n == 0) return acc;
    else return doFib(n - 1, b + acc, b); 
}


// n = 15;
// console.log(tailRecFib(n));
