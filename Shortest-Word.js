// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(words) {
    const wordArray = words.split(' ');
    let shortestLength = Infinity;
  
    for (let i = 0; i < wordArray.length; i++) {
      const currentWordLength = wordArray[i].length;
      if (currentWordLength < shortestLength) {
        shortestLength = currentWordLength;
      }
    }
  
    return shortestLength;
  }