// Exercise 1
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
  }
  
  let arr = [5, 3, 8, 1];
  let filtered = filterRange(arr, 1, 4);
  
  console.log(filtered);
  console.log(arr);
  
  // Exercise 2
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [john, pete, mary];
  
  let names = users.map(user => user.name);
  
  console.log(names);
  
  // Exercise 3
  let user1 = { name: "John", age: 25 };
  let user2 = { name: "Pete", age: 30 };
  let user3 = { name: "Mary", age: 29 };
  
  let arr2 = [user1, user2, user3];
  
  function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
  }
  
  console.log(getAverageAge(arr2));
  