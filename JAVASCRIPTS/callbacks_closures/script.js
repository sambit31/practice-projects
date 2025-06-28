//normal function
function add(a,b){
    return (a+b);
}
console.log(add(2,3));
 ////////////////////////////

function mul(a,b){
    return (a*b);
}
console.log(mul(3,2));

////////////////////////////
function iseven(a){
    return (a%2==0)
}
console.log(iseven(6));

///////////////////////////
function greet(name){
    return name;
}
console.log("Hello",greet("sambit"))

///////////////////////////
function square(num){
    return num*num;
}
console.log(square(20))

//////////////////////////////
function getmax(a,b){
    if(a>=b){
        return a;
    }else{
        return b;
    }
}
console.log("max:",getmax(20,70))

///////////////////////////////
function isprime(n){
    if (n<=1) return false;
    for(let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}
console.log(isprime(5))


///////////////////////////////
//callback:--------

function greetuser(name,greet){
    greet(name);
}

greetuser("sambit",function(h){
    console.log("welcome "+h);
})

////////////////////////////////

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}

function calculator(x,y,operation){
    return operation(x,y);
}
console.log(calculator(10,20,add));
console.log(calculator(60,20,sub));
console.log(calculator(6,2,mul));

////////////////////////////////////
function odd() {
  console.log("It's an odd number");
}

function even() {
  console.log("It's an even number");
}

function checknum(num,callbackEven,callbackOdd){
    if(num%2==0){
        callbackEven()
    }else{
        callbackOdd()
    }
}

checknum(10,even,odd);


//////////////////////////////////////
function greet(){
    console.log("Hello")
}
function repeat(n,callback){
    for(i=1;i<=n;i++){
        callback()
    }
}
repeat(3,greet);
//////////////////////////////////////
//closure:------------------------

function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}

var makecount=counter();

makecount()
makecount()
makecount()
///////////////////////////////////////
//clouser+hof
function abcd(fn,limit){
    let fn = abcd(fn,3)
    return function(){

    }
}

let limiter = abcd(function(){
    console.log("hey");
},3);