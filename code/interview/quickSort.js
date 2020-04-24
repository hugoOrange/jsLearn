function testCase(inputArr) {
    console.log("before: ");
    console.log(inputArr);
    console.log("after: ");
    console.log(quickSort(inputArr));
}
function testData(len) {
    var a = [];
    for (let i = 0; i < len; i++) {
        a.push(Math.round(Math.random() * 100));
    }
    return a;
}
testCase(testData(5));
testCase(testData(5));
testCase(testData(5));
testCase([62, 5, 80, 89, 8])

// 升序
function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1)

    function quickSortHelper (arr, l, r) {
        if (l >= r) {
            return;
        }
        var k = l, i = r, dir = -1;
        while (i !== k) {
            if ((i > k && arr[i] < arr[k]) || 
                (i < k && arr[i] > arr[k])) {
                swap(arr, i, k);
                dir = -dir;
                k = i;
            } else {
                i+=dir;
            }
        }
        quickSortHelper(arr, l, k)
        quickSortHelper(arr, k + 1, r);
    }

    function swap (arr, i, j) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr;
}
