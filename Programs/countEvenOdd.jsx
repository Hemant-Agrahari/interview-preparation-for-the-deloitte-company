const printEvenOdd = (arr) => {
    const even = [];
    const odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return { even, odd };
};

console.log(printEvenOdd([1, 2, 3, 4, 5, 6]));



const evenOddCount = (arr)=>{
    let even = 0;
    let odd = 0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]%2===0){
            even++;
        }
        else{
            odd++;
        }
    }
    return {
        even,odd
    }
}
console.log(evenOddCount([1,2,3,4,5,6,7,8]))