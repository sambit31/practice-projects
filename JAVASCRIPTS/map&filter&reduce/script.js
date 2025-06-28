/*
//shopping cart mini project:-----------
var arr = [
    {name:"chips",price:10,quantity:3},
    {name:"icecream",price:20,quantity:6},
    {name:"Bread",price:15,quantity:10}
];

//map:---------------
//Use .map() to calculate total price for each product

const total = arr.map(function(item){
    
    return {
        name:item.name,
        total:item.price*item.quantity
    }
    
})
//forEach:-----------
//Use .forEach() to display the cart nicely

const display = total.forEach(function(item){
    console.log(`${item.name}=>${item.total}`)
})

//total

let grandtotal=0;
total.forEach(function(item){
    grandtotal=grandtotal+item.total;
})
console.log("grandtotal:",grandtotal);*/



const students = [
    {
        name:"sambit",
        marks:100,
        grade:"A"
    },
    {
        name:"debopam",
        marks:90,
        grade:"A"
    },
    {
        name:"gubla",
        marks:30,
        grade:"D"
    }
]

//filter:---------
//Get the students who passed (e.g., marks >= 40)
const pass = students.filter(function(num){
    return num.marks>=40;
})

//forEach:-----------
//Print the name and marks of passed students
const studentname =pass.forEach(function(students){
    console.log(`pass ${students.name}`)
})
//reduce:---------------
//Calculate the total marks
const total = pass.reduce(function(accumulator,key){
    return (accumulator+key.marks)
},0)

console.log(total)
//filter:---------
//Use .filter() to get students with marks less than 40
const fail =students.filter(function(fail){
    return fail.marks<40
})
//map
// Use .map() to return a new array with name, marks, and grade

const grade = students.map(function(item){
    return{name:item.name,marks:item.marks,grade:item.grade}
})
console.log(grade);

