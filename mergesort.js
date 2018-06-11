function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length === 1){
      return wholeArray;
  } else if (wholeArray.length % 2 === 0){
      // even length
      let arrlength = wholeArray.length
      let firstHalf = wholeArray.slice(0, (arrlength / 2));
      let secondHalf = wholeArray.slice(arrlength / 2);
  } else {
      // odd length

  }


    return [firstHalf, secondHalf];
}

 var sample = [4, 7, 3, 1]

 // first split
// [4, 7]
// [3, 1]

// second split
// [4]
// [7]
