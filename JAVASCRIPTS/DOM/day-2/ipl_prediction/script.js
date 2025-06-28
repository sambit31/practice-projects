var arr = ["chennai","mumbai","kolkata","gujrat","bangalore",
    "lacknow","delhi","hydrabad"];

var btn= document.querySelector('#btn')
var h2=document.querySelector("h2")

btn.addEventListener("click",function(){
    var num = Math.floor(Math.random() * arr.length);
    let winner = arr[num];
    h2.innerHTML = winner
})



