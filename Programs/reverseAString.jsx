const reverseAString = (str)=>{
    let reverse = "";
    for(let i=str.length-1;i>=0;i--){
        reverse = reverse + str[i]
    }
    return reverse;
}
console.log(reverseAString("Hemant Agrahari"));

const reverseANumber = (number)=>{
    let reverse = 0;
    while(number>0){
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10); 
    }
    return reverse
}
console.log(reverseANumber(12345))