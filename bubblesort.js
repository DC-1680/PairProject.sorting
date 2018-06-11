function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        let num1 = arr[i];

        for (let j = 1; j < arr.length; j++){
            let num2 = arr[j];
            if (num1 > num2){
                swap(num1, num2, arr);
            } 
            // else we don't modify the location
        }
    }
    return arr;
};

function swap(num1, num2, arr){
    //exchanging two elements locations in an array
    //swap indexes of num1 & num2
    // let high = num1;
    // let low = num2;
    // num1 = low;
    // num2 = high;
    let index1 = arr.indexOf(num1);
    let index2 = arr.indexOf(num2);
    arr[index1] = num2;
    arr[index2] = num1;
}