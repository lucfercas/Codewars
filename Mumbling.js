// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	const letters = s.split('');
  let result = '';
  
  for (let i = 0; i < letters.length; i++) {
    result += letters[i].toUpperCase() + letters[i].toLowerCase().repeat(i);
    if (i !== letters.length - 1) {
      result += '-';
    }
  }
  return result
} 