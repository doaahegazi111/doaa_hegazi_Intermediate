
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





// let res=0;
// function reverse(num){
//         res = Number(String(num).split('').reverse().join(''));
//     return res;
// }
// let i=45007;
// document.write(reverseNumber(i))


// let arr=[1,20,3,40,5];
// function chooseTheBig (myArr){
//     let newArr=[];
//     let firstBig;
//     let secondBig;
    
//         firstBig= Math.max.apply(Math, myArr);
//         var index= myArr.indexOf(firstBig);
//         var arr2= myArr.slice((index -1), 1)
//         secondBig= Math.max.apply(Math,arr2);
//         newArr.push(firstBig,secondBig);
//     return newArr;
// }
// document.write(chooseTheBig(arr))