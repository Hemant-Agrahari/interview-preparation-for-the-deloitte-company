const longestSubstring = (str) => {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  let start = 0; // track starting index of result

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left; // update start index
    }
  }

  return str.substring(start, start + maxLength);
};

console.log(longestSubstring("abcabcbb")); // "abc"