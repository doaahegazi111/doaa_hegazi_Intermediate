let arr = new Array;
function biggest(x){
    if(arr.length == 1){
        return null;
    }else{}
    let result = x.sort((x,y) => y-x).slice(0,2);
    return result;
}
// arr=[18];     /*  ============== Output = null */
arr=[18,150,2,9,58,4];       /* ======== output 150,58 */
document.write(biggest(arr));
