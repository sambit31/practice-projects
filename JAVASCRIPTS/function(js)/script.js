/*types of function:----->
1)function statement
2)function expression
3)anoymous function
4)fatarrow with parameters
5)fatarrow with implicit return

*/



//1)function statement(basic)  [whenever you need to run the function you can call  ]

function hii(){//func
    console.log("hello world");
}
hii();//call

//------------------------------------------------------

//function with parameters

function greet(hii,hello){
    console.log(hii,hello); //ans: namaste salamalakum undefined
}

greet("namaste","salamalakum","kemcho");//arguments
//we have to call the function otherwise it will not run




//2)function expression(function save in varibale)

var greet=function hii(){//func
    console.log("hello world");
}
hii();//call


//3)anoymous function(function without name)

var greet = function(){
    //anonymous func
}



//4)fatarrow function(with  parameter)
var hii=abc =>{
 console.log(abc)
}
abc(12);


//5) implicit retrun(direct return)
var abcd =()=>"harsh";

//--------------------------------------------------------------

//rest function("..."opertor)
 function abcd(a,b,c,...rest){
    console.log(a,b,c,rest);
 }
 abcd(1,2,3,8,9,6,7,10,88);


 //hoisting
 console.log(a);
 var a=12;//varibale will go on top in javascript afterthrn rest of the code will run
//js mein variables and functions unko js decleration wala part top pe move kr dete hain,aurr isey hu kahte hai hoisting


//iife-immediately invoked function expression
(function abcd(){
    console.log("hey");//it is private variables
})
();

//hofs-higher order function
function abcd(){
    return function(){//return function ...
        console.log("hoho");
    }
}
abcd()();//call function ()...

  