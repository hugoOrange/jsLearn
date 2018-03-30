// var print = str => console.log(str);
// var jug = true;
// var readline = () => {
//     if (jug) {
//         jug  = false;
//         return "10 3";
//     } else {
//         return "54 14 20 23 65 43 24 76 23 45 23";
//     }
    
// }


// var nk = readline().split(" ");
// var n = +nk[0];
// var k = +nk[1];
// var nList = readline().split(" ");
// var count = 0;
// var dup = [];


// for (let i = 0; i < nList.length - 1; i++) {
//     if (+nList[i] + k === +nList[i + 1]) {
//         count += 1;
//     } else if (+nList[i] + k > +nList[i + 1]) {
//         for (let j = i + 1; j < nList.length; j++) {
//             if (+nList[i] + k === +nList[j]) {
//                 count += 1;
//             } else if (+nList[j] + k < nList[j + 1]) {
//                 break;
//             }
//         }
//     }
// }

// print(count);

// var print = str => console.log(str);
// var readline = () => "5000";

// let n = +readline();
// let x = Math.log(n) / Math.log(2);
// if ((x + "").search(/\./) === -1) {
//     print(Math.floor(x));
// } else {
//     print(Math.floor(x) + 1);
// }


var print = str => console.log(str);
var jug = 0;
var readline = () => {
    switch(jug) {
        case 0:
            jug+=1;
            return "3";
        case 1:
            jug +=1;
            return "6+6*6";
        case 2: 
            jug+=1
            return "6*6";
        case 3: 
            jug+=1
            return "6-6";
    }
}

var line = +readline();
var p = [];
for (let i = 0; i < line; i++) {
    p.push(eval(readline()) + "");
}
var res = new Array(line * 5).fill("");
var letter = "";

function addL(i, str) {
    str = str.split(",");
    res[i * 5 + 0] += str[0];
    res[i * 5 + 1] += str[1];
    res[i * 5 + 2] += str[2];
    res[i * 5 + 3] += str[3];
    res[i * 5 + 4] += str[4];
}
print(p)
for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p[i].length; j++) {
        letter = p[i][j];
        switch (letter) {
            case "0":
                addL(i, "66666,6...6,6...6,6...6,66666");
                break;
            case "1":
                addL(i, "....6,....6,....6,....6,....6");                
                break;
            case "2":
                addL(i, "66666,....6,66666,6....,66666");                
                break;
            case "3":
                addL(i, "66666,....6,66666,....6,66666");        
                break;
            case "4":
                addL(i, "6...6,6...6,66666,....6,....6");        
                break;
            case "5":
                addL(i, "66666,6....,66666,....6,66666");                    
                break;
            case "6":
                addL(i, "66666,6....,66666,6...6,66666");                    
                break;
            case "7":
                addL(i, "66666,....6,....6,....6,....6");                    
                break;
            case "8":
                addL(i, "66666,6...6,66666,6...6,66666");                   
                break;
            case "9":
                addL(i, "66666,6...6,66666,....6,66666");                    
                break;
        
            default:
                break;
        }
        if (j !== p[i].length - 1) {            
            addL(i, "..,..,..,..,..");
        }
    }
}
print(res.join("\n"))