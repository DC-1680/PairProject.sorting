function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    let arrlength = wholeArray.length, 
        firstHalf = [],
        secondHalf = [];
  if (wholeArray.length === 1){
      return wholeArray;
  } else if (wholeArray.length % 2 === 0){
      // even length
      
    firstHalf = wholeArray.slice(0, (arrlength / 2));
    secondHalf = wholeArray.slice(arrlength / 2);
  } else {
      // odd length
    // let oddArrLength = wholeArray.length + 1
    firstHalf = wholeArray.slice(0, ((arrlength + 1) / 2));
    secondHalf = wholeArray.slice((arrlength+1) / 2);
  }
    return [firstHalf, secondHalf];
}

 //var sample = [4, 7, 3, 1]

 // first split
// [4, 7]
// [3, 1]

// second split
// [4]
// [7]

function merge(arr1, arr2){
    let mergedArray = [];
    let min;
    let max; 
    //debugger;
    for (let i=0; i<arr1.length; i++){
        
        for (let j=0; j<arr2.length; j++){
            if(arr1[i] < arr2[j] || arr1[i] === arr2[j]){
                mergedArray.push(arr1[i]);
            }
            else if (arr2[j]<arr1[i]){
                mergedArray.push(arr2[j]);
            }
        }
    }
    return mergedArray;
}
let arr1 = [1, 6]
let arr2 = [3, 8]