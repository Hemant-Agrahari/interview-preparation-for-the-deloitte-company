function isAnagram(str1, str2) {
    // Step 1: length check
    if (str1.length !== str2.length) {
        return false;
    }

    // Step 2: create frequency object
    let count = {};

    // Step 3: count characters from str1
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count[char] = (count[char] || 0) + 1;
    }

    // Step 4: decrease count using str2
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];

        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
}

// Test
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false