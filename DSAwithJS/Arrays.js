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