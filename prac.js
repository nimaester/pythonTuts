function binaryPatternMatching(pattern, s) {
  // 0 are vowels
  // 1 are consonants
  // return the number of times the 0's and 1's pattern are matching

  let vowels = ["a", "e", "i", "o", "u", "y"];
  let matchingPatterns = 0;
  let stringToBinary = [];

  for (let char of s) {
    if (vowels.includes(char)) {
      stringToBinary.push(0);
    } else {
      stringToBinary.push(1);
    }
  }

  for (let i = 0; i < stringToBinary.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (Number(pattern[j]) !== Number(stringToBinary[i + j])) {
        break;
      }
      if (j === pattern.length - 1) {
        matchingPatterns += 1;
      }
    }
  }
  return matchingPatterns;
}

console.log(binaryPatternMatching("010", "abababababababab"));
