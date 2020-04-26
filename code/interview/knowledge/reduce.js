var sourceArray = [1, 2, 3, 4, 5, 6];

sourceArray.reduce((pre, curr, currIndex, sourceArr) => {
    console.log(pre, curr, currIndex)
    console.log(sourceArr)
    return pre;
});

function sum(arr) {
    return arr.reduce((pre, curr) => pre + curr);
}
console.log("sum");
console.log(sum(sourceArray));

function myFlat(arr) {
    return arr.reduce((pre, curr) => {
        return pre.concat(curr);
    }, [])
}
console.log("myFlat");
console.dir(myFlat([sourceArray, sourceArray]));

function times(arr) {
    return arr.reduce((pre, curr) => {
        if (pre[curr]) {
            pre[curr]++;
        } else {
            pre[curr] = 1;
        }
        return pre;
    }, {});
}
console.log("times");
console.log(times(["Job", "Bill", "Job", "Alice"]))

function myMap(arr, fn) {
    return arr.reduce((pre, curr, currIndex) => {
        return pre.concat(fn(curr, currIndex));
    }, []);
}
console.log("myMap")
console.log(myMap([1,2,3,4,5,6], (item, index) => {
    return item + index;
}));