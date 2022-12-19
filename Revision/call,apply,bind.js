let user= {
    firstName: "ajay",
    lastName:"Rajpoot",
    // welcome: function(){
    //     console.log(`Welcome ${this.firstName} ${this.lastName}`);
    // }
};
// user.welcome();

//normal

// let welcome= function(){
//         console.log(`Welcome ${this.firstName} ${this.lastName}`);
//     }

// with parameters

let welcome= function(email, mob, loc){
    console.log(`Welcome ${this.firstName} ${this.lastName}, thanks for blah blah! your email id is ${email} 
    your registered number is ${mob}
    Your location is ${loc}`);
}

let user2= {
    firstName:"anuj",
    lastName:"foohad",
};

// call method

welcome.call(user2,"abs@bhadwa.com",1234345,"bihaad");

//apply--> arguments passed in array

welcome.apply(user2, ["abs@bhadwa.com",1234345,"bihaad"]);

//Bind

let bindedFN = welcome.bind(user,"abs@bhadwa.com",1234345,"bihaad");
console.log(bindedFN);
bindedFN();

/*
OUTPUT

Welcome anuj foohad, thanks for blah blah! your email id is abs@bhadwa.com 
    your registered number is 1234345
    Your location is bihaad

VM36:19 Welcome ajay Rajpoot, thanks for blah blah! your email id is abs@bhadwa.com 
    your registered number is 1234345
    Your location is bihaad

VM36:40 ƒ (email, mob, loc){
    console.log(`Welcome ${this.firstName} ${this.lastName}, thanks for blah blah! your email id is ${email} 
    your registered number is ${mob}
    Your location is ${loc}`);
}

VM36:19 Welcome ajay Rajpoot, thanks for blah blah! your email id is abs@bhadwa.com 
    your registered number is 1234345
    Your location is bihaad
 */


/*
 Welcome AnujFoohad, 
    Thanks for blah blah! Your email id is anuj@nws.com 
    Your registered number is 1234675
    Your location is Reels

 Welcome AnujFoohad, 
    Thanks for blah blah! Your email id is anuj@nws.com 
    Your registered number is 1234675
    Your location is Reels

 ƒ (email, mob, loc){
    console.log(`Welcome ${this.firstName}${this.lastName}, 
    Thanks for blah blah! Your email id is ${email} 
    Your registered number is ${mob}
    Your location is ${loc}`)

 Welcome ajaydeep123, 
    Thanks for blah blah! Your email id is asr@nws.com 
    Your registered number is 1234345
    Your location is Twitter

 Welcome ajaydeep123, 
    Thanks for blah blah! Your email id is asr@nws.com 
    Your registered number is 1234345
    Your location is Twitter
    
*/