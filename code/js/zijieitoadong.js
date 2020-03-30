var readlineCount = 0;
var readline = () => {
    readlineCount += 1;

    switch (readlineCount) {
        case 1:
            return 3;
        case 2:
            return "3 1 2 3";
        case 3:
            return "3 2 4 6";
        case 4:
            return "3 3 4 6 16 71 4 55";
    }

};
var print = (s) => {
    console.log(s);
}


var calCount = +readline();
var tmpArr, resArr = 0, jiangeArr = [], maxjiange = 0, mIndex = 0;

// read
for (let i = 0; i < calCount; i++) {
    tmpArr = readline().split(" ");
    tmpArr.shift();
    tmpArr.map(v => +v).sort((a, b) => a - b).filter((v, i, arr) => arr.lastIndexOf(v) === i);

    if (tmpArr.length === 1) {
        print(resArr)
        continue;
    }
    if (tmpArr.length === 2) {
        print(tmpArr[1] - tmpArr[0]);
        continue;
    }
    jiangeArr = tmpArr.map((v, i, arr) => i === arr.length ? 0 : (arr[i + 1] - v));
    jiangeArr.pop();
    console.log(jiangeArr)
    maxjiange = jiangeArr[0];
    resArr = jiangeArr.find((v, i, arr) => {
        i === arr.length ? maxjiange : Math.max(maxjiange, v[i + 1]);
    });
    mIndex = jiangeArr.indexOf(maxjiange);
    for (let j = mIndex; j < jiangeArr.length; j++) {
        
    }
    for (let j = mIndex; j >= 0; j--) {
        
    }
    

    print(resArr);
}


// var rCount = 0
// var readline = () => {
//     rCount += 1;
//     switch(rCount) {
//         case 1:
//         return "uuurrdddddl";
//         case 2:
//         return 3;
//         case 3:
//         return "5 6 3 3";
//         case 4:
//         return "5 6 4 2";
//         case 5:
//         return "6 6 4 2";
//     }
// }
// var print = str => console.log(str);


// var op = readline();
// var tryTimes = +readline();
// var matrix = [];
// var nowPos = [0, 0];
// var stepArr = new Array(tryTimes).fill(0);

// for (let i = 0; i < tryTimes; i++) {
//     matrix = readline().split(" ").map(v => +v);
//     nowPos = [matrix[2], matrix[3]];
//     for (let j = 0; j < op.length; j++) {
//         stepArr[i] += 1;
//         switch(op[j]) {
//             case "u":
//                 nowPos[0] -= 1;
//                 break;
//             case "d":
//                 nowPos[0] += 1;
//                 break;
//             case "l":
//                 nowPos[1] -= 1;
//                 break;
//             case "r":
//                 nowPos[1] += 1;
//                 break;
//         }
//         if (nowPos[0] < 1 || nowPos[0] > matrix[0] || nowPos[1] < 1 || nowPos[1] > matrix[1]) {
//             break;
//         }
//     }
// }

// for (let i = 0; i < stepArr.length; i++) {
//     print(stepArr[i]);
// }