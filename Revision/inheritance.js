/*
const me = {
    talk(){
        return 'Speaking';
    }
}
me.talk(); //Speaking

 const you = {
     talk(){
        return 'Speaking';
    }
 }
you.talk() //speaking
*/

//now let's say that we have multiple such variables where talk() is used, we can clearly see that there's issue of repeating code with this approach

// So, we resolve this using classes and inheritance

class Person {
  talk() {
    return 'Talking';
  }
}

const me = new Person();
const you = new Person();
me.talk(); // Talking
you.talk(); // Talking

// To update the function for both instances you only have to do it once:
Person.prototype.talk = function () {
  return 'New and improved Talking';
}; 


// -----------------------------------------
// Inheritance using pure objects with Object.create
const person = {
  talk() {
    return 'Talking';
  }
}
const me = Object.create(person);
me.talk(); // Talking


// -----------------------------------------
// Inheritance using pure objects with Object.setPrototypeOf
const person = {}
person.__proto__.talk = function (){
  return 'Talking';
}
const me = {};
Object.setPrototypeOf(me, person);
me.talk(); // Talking



// -----------------------------------------
// Extending a Class using 'extends'
class Person {
  talk() {
    return 'talking';
  }
}

class SuperHuman extends Person {
  fly() {
    return 'flying';
  }
}
const me = new Person();
console.log(me.talk); // talk exists
console.log(me.fly); // fly does NOT exists

const you = new SuperHuman();
console.log(you.fly); // fly exists
console.log(you.talk); // talk also exists!