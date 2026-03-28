const frequencyCount = (arr) => {
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  return count;
};

console.log(frequencyCount([1,2,2,3,3,3]));
// {1:1, 2:2, 3:3}