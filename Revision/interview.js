var users = [
    { firstName: "Mayank", lastName: "Singh", age: 55 },
    { firstName: "Jyoti", lastName: "Jauhari", age: 25 },
    { firstName: "Saket", lastName: "Bharti", age: 15 },
  ];


// return fullname of users
function getFullName(obj){
    return obj.firstName+ " "+ obj.lastName;
}

var ans= users.map(getFullName)
console.log(ans);

console.log(users.map((obj)=> obj.firstName +" "+ obj.lastName));

//return the people with particular age 
// output -> {55:1, 25:1,15:1}

