const longestSubstring = (str) => {
  let set = new Set();   // to store unique characters in current window
  let left = 0;          // left pointer (start of window)
  let maxLength = 0;     // store max length found
  let start = 0;         // starting index of longest substring

  // right pointer expands the window
  for (let right = 0; right < str.length; right++) {

    // If duplicate found, shrink window from left
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    // Add current character to set
    set.add(str[right]);
    // Update max length and starting index
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left;
    }
  }

  // Return longest substring
  return str.substring(start, start + maxLength);
};

console.log(longestSubstring("abcabcbb")); // "abc"
