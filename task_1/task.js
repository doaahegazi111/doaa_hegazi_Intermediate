let arr =[18,150,2,9,58,4];
function biggest(input){
    if(arr.length == 1){
        return null
    }
    else{
        let result= input.sort((x,y) => y-x).slice(0,2);
        return result;
    }
}
console.log(biggest(arr));
