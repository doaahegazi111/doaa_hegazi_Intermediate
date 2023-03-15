let arr= new Array;
let max= 0 ;
let index =0;
function longest(long){
    if(arr.length == 0){
        return null;
    }
    for(let i =0 ; i < long.length ; i++){
        let x = long[i].length;
        if(x > max){
            max = x;
            index=i;
            console.log(arr[index])
        }
    }
    return arr[index];
}
arr=["apple","pear","kiwi","banana"]
document.write(longest(arr))
