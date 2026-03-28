function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(15);


function checkPrimeNumber(num) {
    // Step 1: Numbers less than or equal to 1 are NOT prime
    if (num <= 1) return false;
    // Step 2: Loop from 2 to square root of num
    // We use sqrt(num) because factors repeat after that
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Step 3: If num is divisible by i, it's NOT prime
        if (num % i === 0) return false;
    }
    // Step 4: If no divisors found, number is prime
    return true;
}

// Test case
console.log(checkPrimeNumber(7)); // true

// fibonacci series: 0, 1, 1, 2, 3, 5, 8, ...
function fibonacci(n) {
    // Step 1: Base case
    // If n is 0 or 1, return n directly
    if (n <= 1) return n;

    // Step 2: Recursive case
    // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test
console.log(fibonacci(3)); // 2


function factorial(n) {
    if (n === 0 || n === 1) return 1; // base case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120