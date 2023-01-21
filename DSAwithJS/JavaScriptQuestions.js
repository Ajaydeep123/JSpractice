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

// Write a JavaScript function that reverse a number.

// const num = prompt('enter the number',0);
// const x = (numArg) => {
// return +[...String(numArg)].reverse().join("");
// };
// console.log(x(num));


/* 
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed. */

/* 
function nextInLine(arr, item) {
    // Only change code below this line
    //push at last
    arr.push(item);
    //remove first element of array
    return arr.shift()
    
    return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
 */


/*   function checkAge(data) {
    if (data === { age: 18 }) {
      console.log('You are an adult!');
    } else if (data == { age: 18 }) {
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`);
    }
  }
  
  checkAge({ age: 18 }); //Hmm.. You don't have an age I guess */


/*   function getAge(...args) {
    console.log(typeof args);
  }
  
  getAge(21);  *///object -> The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"

/*   function getAge() {
    'use strict';
    age = 21;
    console.log(age);
  }
  
  getAge(); // ReferenceError-> With "use strict", you can make sure that you don't accidentally declare global variables. 
  We never declared the variable age, and since we use "use strict", it will throw a reference error. 
  If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object. */

