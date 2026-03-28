const maxArrF = (arr) => {
  let maxArr = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxArr) {
      maxArr = arr[i];
    }
  }

  return maxArr;
};

console.log(maxArrF([1, 2, 3, 4, 5])); // 5


const minArr = (arr) => {
  let minA = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minA) {
      minA = arr[i];
    }
  }

  return minA;
};

console.log(minArr([1, 2, 3, 4, 5])); // 1


//print second largest number in an array
const secondLargest = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}
console.log(secondLargest([1, 2, 3, 4, 5])); // 4


// Input:  [1, 2, 3, 2, 4, 5, 1]
// Output: [2, 1]

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));