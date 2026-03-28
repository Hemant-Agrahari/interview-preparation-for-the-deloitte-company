const palindroneNumber =(num)=>{
    const original = num;
    let reverse =0;
    while(num>0){
        let digit = num % 10;
        reverse = reverse *10 + digit;
        num = Math.floor(num /10);
    }
    return original == reverse
    
}
console.log(palindroneNumber(1213)); // false
console.log(palindroneNumber(12321)); // true


const palindroneString = (str) => {
  const original = str;
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }

  return original === reverse; // ✅ correct
};

console.log(palindroneString("Banana")); // false
console.log(palindroneString("madam"));  // true