function countPrimeNumbers() {
    var count = 0;
    for (var i = 2; i <= 100; i++) {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        count++;
      }
    }
    return count;
  }
  
  var start = performance.now();
  for (var i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  var end = performance.now();
  var executionTime = end - start;
  console.log('Execution time of calculating prime numbers 100 times was ' + executionTime.toFixed(2) + ' milliseconds.');
  