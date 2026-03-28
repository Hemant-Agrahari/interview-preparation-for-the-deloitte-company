const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const count = {};

  // count characters of first string
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    count[char] = (count[char] || 0) + 1;
  }

  // match with second string
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!count[char]) return false; // not found
    count[char]--;
  }

  return true;
};

console.log(isAnagram("listen", "silent")); // true