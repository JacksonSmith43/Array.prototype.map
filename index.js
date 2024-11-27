function map(array, callback) {
    const newArray = [];

    for (let i = 1; i <= array.length; i++) {
        console.log(callback(i));
        newArray.push(callback(i));
    }
    return newArray;
}


const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2); // (array, callback)
console.log("mappedArray", mappedArray); // Output: [2, 4, 6, 8, 10] 
