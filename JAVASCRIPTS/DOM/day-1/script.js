//Dom 4 pillars
//1)select the element[.getElementbyid,.queryselector]
//2)changing the html[.innerhtml,]
//3)changing the css
//4)event listener


/*var a = document.querySelector("h1");
a.innerHTML="sambit ghosh";
a.style.color="blue";
a.style.font="40px";

a.addEventListener('click',function(){
    console.log("hii");
})*/
//-----------------------------------------------

//event:=
/*var a = document.querySelector("h1");

a.addEventListener('click', function () {
    a.innerHTML = "sambit ghosh";
    a.style.color = "blue";
    a.style.font = "40px";
})*/
//-------------------------------------------------

//var box = document.querySelectorAll("h1")//for every element[h1] //select every element

//box[2].innerHTML = "hello"//selection 
//----------------------------------------------------------

var button = document.querySelector('.btn');

button.addEventListener("click", function () {
    button.innerHTML = "Submit";
    console.log("Button text changed to Submit");
});
