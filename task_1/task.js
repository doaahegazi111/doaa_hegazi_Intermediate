input =[18,150,2,9,58,4];
function biggest(arr){
    let result= input.sort((x,y) => y-x).slice(0,2);
    return result;
}
document.write(biggest(input));
