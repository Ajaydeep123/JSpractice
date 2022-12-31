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
