// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const filteredArray = Array.from(str.toLowerCase()).filter(char => char === 'x' || char === 'o');
  
    const xCount = filteredArray.filter(char => char === 'x').length;
    const oCount = filteredArray.filter(char => char === 'o').length;
  
    return xCount === oCount;
  }