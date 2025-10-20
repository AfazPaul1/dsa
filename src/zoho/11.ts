function nge(arr) {
    let n = arr.length
    let stk = []
    let res = Array(n).fill(-1)
    for (let i = n-1; i >= 0; i--) {
        while(stk.length > 0 && stk[stk.length-1] <= arr[i]) {
            stk.pop()
        }
        if (stk.length > 0) {
            res[i] = stk[stk.length-1]
        }
        stk.push(arr[i])
    }
    return res
}   
console.log(nge([6,8,0,1,3]));
     