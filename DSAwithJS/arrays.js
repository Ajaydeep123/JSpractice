//cut array length
let data = [4,7,1,4,9,2,4,1];
data.length=5;
console.log(data);

//sum of array element
let sum = data.reduce((x,y)=>x*y);
console.log(sum);

//remove duplicate values from array
let unique = new Set(data);
console.log([...unique]);

//comma operator
let x=10;
y=40;
x=(y+=20, y);
console.log(x);

//value swap using destructuring
let z=20, y=30;
[x,y]=[y,x];
console.log(x,y);


//Number of arrays inside an array

function countArray(arr){
    let arrayCount =0;
    arr.forEach(element =>{
        if(Array.isArray(element)){
            arrayCount++;
        }
    })

    return arrayCount;
}

const nestedArray = [1, [2, 3], [4, 5, 6], 7, [8, [9, 10]]];
const numberOfArrays = countArray(nestedArray);
console.log(numberOfArrays); // Output: 3


function arrayCount(arr){
    return arr.filter(n=>Array.isArray(n)).length;
}

arr_nums = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
console.log('Number of arrays inside the said array: ' + arrayCount(arr_nums));
