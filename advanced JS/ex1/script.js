//1
let user = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false } = user;
  
  console.log(name);
  console.log(age);
  console.log(isAdmin);


  //2

  let planetName = "Earth";
let visitorName = "Alice";

console.log(planetName);
console.log(visitorName);
//3
//The code will result in an error when calling sayHi()

//4
let newUser = {};
newUser.name = "John";
newUser.surname = "Smith";
newUser.name = "Pete";
delete newUser.name;

console.log(newUser);


//5

const user2 = {
  name: "John"
}

// does it work?
user2.name = "Pete"

console.log(user2)
 //6

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}


console.log(sum);

//7
let a = 4;
let b = 5;

let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result);

//8
let login='nnnjkn';

let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' : '22222';
console.log(message);
