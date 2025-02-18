//Variables and Conditionals:
//1
let age = 10;

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You cannot vote');
}

//2
let userName = prompt('What is Your Name? fOR THE FIRST TIME');
if (userName == 'John') {
    console.log('Hello John');
} else {
    console.log('You are not John');
}

//Functions
//1
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 4));
console.log(sum(310, 4));
console.log(sum(3, 2055));

//2
function rev(inputText) {
    return inputText.split('').reverse().join('');
}

let rev1 = 'Hello world';
let rev2 = 'Hi , This is Majd :)';

console.log('The string is: ' + rev1);
console.log('The reversed string is: ' + rev(rev1));
console.log('The string is: ' + rev2);
console.log('The reversed string is: ' + rev(rev2));

//Arrays and Loops
//1
let fruits = ['apple', 'banana', 'cherry', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//2
function averageArr(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum/numbersArray.length; 
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArr);
console.log('the avreage '+averageArr(myArr));


//3
function largest(listNum) {
    let maxNum = listNum[0]; 
    for (let i = 1; i < listNum.length; i++) { 
        if (listNum[i] > maxNum) {
            maxNum = listNum[i];
        }
    }
    return maxNum;
}

let myNum = [1, 20, 3, 48, 56, 56, 7, 84, 49, 345];
console.log('My array is: ' + myNum);
console.log('The largest number is: ' + largest(myNum));

//4
let wordsArr = ['hi', 'hello', 'world', 'this', 'is', 'majd'];
let Mystr = '';

for (let i = 0; i < wordsArr.length; i++) {
    Mystr = Mystr + " " + wordsArr[i];
}
console.log('The words are: ' + wordsArr);
console.log('The full text is: ' + Mystr);

//5
function checkName(names, name) {
    console.log("Array of names:", names);
    console.log("Name to check:", name);
    for (let i = 0; i < names.length; i++) {
        if (names[i] === name) {
            return true;
        }
    }
    return false;
}

console.log(checkName(["Ahmad", "Mariam", "Yusuf"], "Mariam"));
console.log(checkName(["Ahmad", "Mariam", "Yusuf"], "Ali"));

//6

let evenNums=[];
for (let i=0;i<21 ;i=i+2){
    evenNums.push(i);

}
console.log(evenNums);

//Objects
//1
let book={title:'Game OF Thrones',author:'George R.R. Martin',year:2011};
console.log(book);
//2

let person={name:'Majd',age:30,Gender:'Male'}
function personDetails(someOne){
    console.log(`hi , My name is ${someOne.name}, i am ${someOne.age} years old , and i am a ${someOne.Gender}`);

}
personDetails(person);
//object as classes
//1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2015,
    color: 'Red',
    startCar() {
        console.log('The car has started.');
    },
    drive() {
        console.log('The car is now driving.');
    }
};

car.startCar();
car.drive();




//windows alert
//1

const alertButton = document.getElementById('am');

alertButton.addEventListener('click', function() {
    window.alert('Hello! This is your alert message!');
});
//2
function askName(){
    const userName2=prompt('What is your name ?SECOND TIME');
        alert(`Hello ${userName2}`);
}

askName()

//dom
//1
const button1=document.getElementById('changeDiv');
button1.addEventListener('click', changeText);
function changeText(){
    const divText=document.getElementById('firstDiv');
    divText.textContent='The text has been changed!, this is new text'
    
}
//2


const addButton = document.getElementById('addTodoButton');
addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const newListItem = document.createElement('li');
      newListItem.textContent = todoText;
      const todoList = document.getElementById('todoList');
      todoList.appendChild(newListItem);
      todoInput.value = '';
    } else {
      alert('Please enter a valid to-do item.');
    }
  }


  document.getElementById('changeImageButton').addEventListener('click', function(){
    var img = document.getElementById('myImage');
    if(img.src === "./images/download (1).jpeg"){
      img.src = "./images/download.jpeg";
    } else {
      img.src = "./images/download (1).jpeg";
    }
  });

  

