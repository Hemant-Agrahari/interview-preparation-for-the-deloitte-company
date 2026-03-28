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


input : "Hemant Agrahari"
output : "tnameH irahargA"

function reverseWords(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

// Example
console.log(reverseWords("Hemant Agrahari"));
// Output: "tnameh iraharga"

inpur:"hemant agrahari"
output: "Hemant Agrahari"

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

// Example
console.log(capitalizeWords("hemant agrahari"));
