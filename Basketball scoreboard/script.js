
const home=document.getElementById("number1")
const guest=document.getElementById("number2");

const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
const btn3=document.getElementById('btn3')
const btn4=document.getElementById('btn4')
const btn5=document.getElementById('btn5')
const btn6=document.getElementById('btn6')

let homecount=0;
let guestcount=0;


btn1.addEventListener("click",()=>{
    home.innerHTML=homecount++



})
btn2.addEventListener("click",()=>{
    home.innerHTML=homecount=homecount+2;



})
btn3.addEventListener("click",()=>{
    home.innerHTML=homecount=homecount+3;



})
btn4.addEventListener("click",()=>{
    guest.innerHTML=guestcount++



})
btn5.addEventListener("click",()=>{
    guest.innerHTML=guestcount=guestcount+2;



})
btn6.addEventListener("click",()=>{
    guest.innerHTML=guestcount=guestcount+3;



})


