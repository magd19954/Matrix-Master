/*let person = {
    name: "Brad",
    age: 35,
    address: { // Fixed key and added missing colon
        street: "hhjvbjhv",
        city: "hjvbjh",
    },
    children: ['rami', ['ukyfgvukygv']] // Ensure proper array formatting
};

var people=[
    {name:"brad",age:35},
    
    {name:"jhon",age:40},
    {name:"sara",age:25},

]


//person=JSON.stringify(person);
//person=JSON.parse(person)
console.log(people[1])*/
let xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

xhr.open("GET", "f.json", true); // Initialize request (method, URL, async)

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) { // Check if request is complete and successful
        let data = JSON.parse(xhr.responseText); // Parse JSON response
         // Handle the response
         console.log(data.pepole)
    }
};

xhr.send(); // Send the request
