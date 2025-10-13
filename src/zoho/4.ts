function arrP(arr) {
    let hash = new Map()
    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1)
        if (hash.get(arr[i]) === 2 && arr[i] !== 0) {
            arr[i-1] = i*2
            hash.set(arr[i], 0)
            arr[i] = 0
            hash.set(0, (hash.get(0) || 0) + 1) //cause we are setting already explored sections to 0
            //console.log(i*2); only prints multiples not existing numbers
        }
    }
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] !== 0) {
            console.log(arr[k]);
            
        }
    }
    for (let j = 1; j <= hash.get(0); j++) {
        console.log(0);  
    }   
}
const arr = [0,2,2,2,0,6,6,0,8]
console.log(arrP(arr))