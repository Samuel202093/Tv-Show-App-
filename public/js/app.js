

var clock = document.querySelector(".getClock");
var air = document.querySelector(".onAir");
var pop = document.querySelector(".popular");
var recent = document.querySelector(".airToday");

 
// var symbol = document.querySelector(".icon");
// var side = document.querySelector(".shows");

var date = new Date();
var dateResult = date.toLocaleString();
clock.textContent = dateResult;

var airing = air.addEventListener('click',()=>{
    window.location.href='/pages/onair';
});

var popShow = pop.addEventListener('click',()=>{
    window.location.href = '/pages/popular';
})

var present = recent.addEventListener('click', ()=>{
    window.location.href = '/';
});


