function subsequences(arr, subseq, n, i) {
    if (i >= n) {
        console.log(subseq);
        return
    }
    subseq.push(arr[i])
    subsequences(arr, subseq, n, i+1)
    //console.log("before", subseq, i);
    
    subseq.pop()
    //console.log("after", subseq, i);
    
    subsequences(arr, subseq, n, i+1)
}
console.log(subsequences([3,1,2], [], 3, 0));
// before [ 3, 1, 2 ] 2
// after [ 3, 2 ] 2
// before [ 3, 2 ] 1
// after [ 2 ] 1
// before [ 2, 2 ] 2
// after [ 2 ] 2
// before [ 2 ] 0
// after [] 0
// before [ 1, 2 ] 2
// after [ 1 ] 2
// before [ 1 ] 1
// after [] 1
// before [ 2 ] 2
// after [ 2 ] 2
// undefined