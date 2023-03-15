
let display=document.getElementById("display");
let btn=document.querySelectorAll(".btn");
let divide=document.getElementById("divide");
let muil=document.getElementById("muil");
let sub=document.getElementById("sub");
let add=document.getElementById("add");
let clear=document.getElementById("clear");
let equal=document.getElementById("equal");
let operation=document.querySelectorAll(".operation");

btn.forEach(ele =>{
    ele.addEventListener("click",()=>{
        let value = parseInt(ele.getAttribute("data-num"));
        display.innerText += value;
    })
})
operation.forEach(e =>{
    e.addEventListener("click",()=>{
        let val = e.getAttribute("data-num");
        display.innerText += val;
    })
})
equal.addEventListener("click",()=>{
    if(display.innerText === ''){
        display.innerText= "";
    }else{
        display.innerText= eval(display.innerText);
    }
})
clear.addEventListener("click",()=>{
    display.innerText= "";
})




