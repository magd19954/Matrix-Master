//1
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

//2

const person1 = new Person("John", 25);
function describePerson(callback) {
  return callback();
}

// 3
function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  // 4
  console.log(person1.introduce());
  describePerson(function () {
    console.log(this.introduce());
  }.bind(person1));
