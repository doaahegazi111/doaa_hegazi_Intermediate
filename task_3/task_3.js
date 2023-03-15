let arr=[-1,-5,-8]
let sum=0;
function addition(num){
    let counter=0;
    for(let i=0; i<num.length ; i++){
        if(num[i]<0){
            counter++;
        }
        else{
            sum +=num[i];
        }
    }
    if(counter == num.length){
        return 0;
    }
    return sum;
}
document.write(addition(arr))
