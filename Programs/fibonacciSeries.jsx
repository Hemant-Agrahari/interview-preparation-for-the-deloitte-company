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

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(7)); // true

function fibonacci(n) {
    if (n <= 1) return n; // base case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5


function factorial(n) {
    if (n === 0 || n === 1) return 1; // base case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120