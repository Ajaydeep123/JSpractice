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
