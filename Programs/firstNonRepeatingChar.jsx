const firstNonRepeatingChar = ()=>{
    let str = "aabbccdeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz";
    let charCount = {};
    //count frequency of each character
    for(let i=0;i<str.length;i++){
        let ch = str[i];
        charCount[ch] = (charCount[ch] || 0) + 1;

    }
    //find first non-repeating character
    for(let i=0;i<str.length;i++){
        let ch = str[i];    
        if(charCount[ch] === 1){
            return ch;
        }
    }
    return null; // No non-repeating character found
}