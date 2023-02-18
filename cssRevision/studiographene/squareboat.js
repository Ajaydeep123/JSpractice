let a = [1, 2, 3, 4, 5, 8, 7];
let b = [1, 2, 6, 3];

Output = [1, 2, 3];

let outputArr = [];
for(let i =0; i<a.length;i++){
    for(let j =0;j<b.length;j++){
        if(a[i] == b[j]){
            outputArr.push(a[i]);
        }
    }
}
console.log(outputArr);