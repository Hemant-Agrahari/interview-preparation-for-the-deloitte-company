function intersection(arr1, arr2) {
    const map = {};
    const result = [];

    // Step 1: Store elements of first array
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = true;
    }

    // Step 2: Check elements of second array
    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]] === true) {
            result.push(arr2[i]);
            map[arr2[i]] = false; // avoid duplicates
        }
    }

    return result;
}

// Example
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log(intersection(arr1, arr2)); // [3, 4]

