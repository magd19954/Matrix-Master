//1
//1
const checkAge = age => age > 18 || confirm('Do you have your parents permission to access this page?');

//2

const pow = (x, n) => x ** n;
//3
const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//4
let calculator = {
    read() {
      this.a = +prompt('Enter a');
      this.b = +prompt('Enter b');
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());

  //5

  const min = (a, b) => a < b ? a : b;
