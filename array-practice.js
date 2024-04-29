const findMinimum = arr => {

  // Your code here

   //Time complexity: O(n)
  //Space complexity: O(1) 

  if(arr.length === 0){
    return undefined; // return undefined for an empty array
  }
  let minimun = arr[0];   // assume first element to be smallest

  for(let i = 1; i < arr.length; i++){      //O(n)
    if(arr[i] < minimun){
      minimun = arr[i];   // update minimum if the current elment is smaller
    }
  }
  return minimun;
};

const runningSum = arr => {

  // Your code here

    //Time complexity: O(n)
    //Space complexity: O(1) 

  if(arr.length === 0){
    return [];   // return an empty array if length is  = 0
  }

  let sum = [0];    //Initialize the sum with the first element

  for(let i = 1; i < arr.length; i++){
    sum += arr[i];    // Add the current element to the sum
    arr[i] = sum;     // Update the current element with the running sum
  }
  return arr;
};

const evenNumOfChars = arr => {

  // Your code here

    //Time complexity: O(n)
    //Space complexity: O(1)  

 let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].length % 2 === 0){
      count++;
    }
  }

  return count;
};

const smallerThanCurr = arr => {

  // Your code here

  //Time complexity: O(n^2)
  //Space complexity: O(n)

  let array = [];
 

  for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = i + 1; i < arr.length; j++){
      
      if(arr[j] < arr[i]){
        count++;
      }
    }
    array.push(count);
  }

  return array;

};

const twoSum = (arr, target) => {

  //Time complexity: O(n)
  //Space complexity: O(n)  
  
  const seen = new Set();

  for (let num of arr) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
};


const secondLargest = arr => {

  // Your code here
  
  // const sorted = arr.toSorted();
  // return sorted[sorted.length - 2];

  //Time complexity: O(n)
  //Space complexity: O(1)
  
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
      if (num > largest) {
          secondLargest = largest;
          largest = num;
      } else if (num > secondLargest && num !== largest) {
          secondLargest = num;
      }
  }

  return secondLargest;
};

const shuffle = (arr) => {

  // Your code here

  //time complexity = O(n)
  //space complexity = O(n)

  const shuffledArray = [...arr]; // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
      // Swap elements at i and j indices
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];