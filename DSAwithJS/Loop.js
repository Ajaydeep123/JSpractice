// Write a JavaScript program that accept two integers and display the larger.
// APPROACH 1
// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }
// APPROACH 2
// let larger = (num1, num2)=>{
//     if(num1>num2){
//         return `${num1} is greater`
//     }else if(num2>num1){
//         return `${num2} is greater`
//     }else{
//         return `both are equal`
//     }
// }
// larger(10, 20)

// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// let x = parseInt(prompt('enter 1st number')),
// y = parseInt(prompt('enter the 2nd number')),
// z = parseInt(prompt('enter the third number'));
// const result = x*y*z;
// if (result>0) {
// alert('it is +ve');
// }
// else if (result ==0) { alert ('it is zero ')}

// else { alert ('the value is -ve')}

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for (var x=0; x<=15; x++) {
//     if (x === 0) {
//             console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " is even");   
//     }
//     else {
//             console.log(x + " is odd");
//     }
// }



// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }
