const removeDuplicateInArr = (arr) => {
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicateInArr([1, 2, 3, 4, 5, 2, 3, 1])); // [1, 2, 3, 4, 5]


const printDuplicateInArr = (arr) => {
    const duplicateArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !duplicateArr.includes(arr[i])) {
            duplicateArr.push(arr[i]);
        }
    }
    return duplicateArr;
}
console.log(printDuplicateInArr([1, 2, 3, 4, 5, 2, 3, 1])); // [1, 2, 3]


const moveZeroToEnd = (arr) => {
    const nonZeroArr = [];
    const zeroArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            nonZeroArr.push(arr[i]);
        }
    }
    return nonZeroArr.concat(zeroArr);
}

console.log(moveZeroToEnd([1, 0, 2, 0, 3, 0, 4])); // [1, 2, 3, 4, 0, 0, 0]

const twoSumSimple = (numbers, targetSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSumSimple([1, 2, 3, 4, 5], 9)); // [3, 4]