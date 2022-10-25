function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoisedFibonacci(n, cache) {
  cache = cache || [1, 1];
  if (cache[n]) {
    return cache[n];
  }
  //console.log(cache);
  cache[n] = memoisedFibonacci(n - 1, cache) + memoisedFibonacci(n - 2, cache);
  console.log(cache);
  //console.log(cache[n]);
  return cache[n];
}

//console.log(fibonacci(44));
//console.log(memoisedFibonacci(44));
//console.log(memoisedFibonacci(60));
