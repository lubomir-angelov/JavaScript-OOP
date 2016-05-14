/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function findPrimes(a, b) {
	var primeArr = [];
	for (var i = a; i < b; i++) {
		if (checkPrime(i)) {
			primeArr.push(i);
		}
	}
	return primeArr;
}

function checkPrime(number){
     if (number < 2){
		return false;
	 }
       if (number != Math.round(n)){
	   return false;
	}
	var isPrime = true;
	for (var i = 2; i <= Math.sqrt(number); i++){
      if (number % i == 0){
      	isPrime = false;
	  }
   }
    return isPrime;
}

module.exports = findPrimes;
