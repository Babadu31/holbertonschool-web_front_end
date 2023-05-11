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
  var primeCount = countPrimeNumbers();
  var end = performance.now();
  var executionTime = end - start;
  console.log('Execution time of printing countPrimeNumbers was ' + executionTime.toFixed(20) + ' milliseconds.');
  