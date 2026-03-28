// A Promise is a way to handle asynchronous operations in a predictable and structured manner. It wraps the operation and ensures the result is handled only once, either as resolved or rejected, while also improving readability through chaining or async/await.

// It has 3 states:

// Pending
// Fulfilled
// Rejected

const promise = new Promise ((resolve,reject)=>{
let success = true;
if(success){
    resolve("Promise resolved successfully");
}
else{
    reject("Promise rejected"); 
}
});

promise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});


// Promise methods

// Promise.all() - Waits for all promises to resolve and returns an array of results. If any promise rejects, it rejects immediately with that reason.
// Promise.race() - Waits for the first promise to resolve or reject and returns that result. If the first promise rejects, it rejects immediately with that reason.
// Promise.allSettled() - Waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise.
// Promise.any() - Waits for the first promise to resolve and returns that result. If all promises reject, it rejects with an AggregateError containing all rejection reasons.
