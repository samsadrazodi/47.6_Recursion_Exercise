/** product: calculate the product of an array of numbers. */

function product(nums) {
    // Base Case
    if(nums.length === 0) return 1;

    // Normal Case
    return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  let currentWordLength = words[0].length

  
  return Math.max(currentWordLength, longest(words.slice(1))) 
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return '';

  return str[0]+ everyOther(str.slice(2))
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length ===0) return true;
  let condition = str[0]===str[str.length-1]

  return condition && isPalindrome(str.slice(1,str.length-1))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currIdx =0) {
  if(currIdx >= arr.length) return -1;
    
  if (arr[currIdx]=== val){
      return currIdx; 
  }
  return findIndex(arr, val, currIdx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return '';

  return str[str.length-1] + revString(str.slice(0,str.length-1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }

  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length-1) {
  if (left > right) {
    return -1; // Element not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) {
    return mid; // Element found at index 'mid'
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, val, mid + 1, right); // Search in the right half
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
