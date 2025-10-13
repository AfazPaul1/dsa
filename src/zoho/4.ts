function arrP(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            //this wont work cause it'll be true for i = 1 and 2 causing 2 4's in out which we do not want
            
        }
        
    }
}
const arr = [0,2,2,2,0,6,6,0,8]
console.log(arrP(arr))