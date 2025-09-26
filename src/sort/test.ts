// function insertion(arr:number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         let j = i
//         while ( j > 0 && arr[j-1] > arr[j]) {
//             console.log(arr[j-1], arr[j]);
//             [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
//             j-- //mistakenly did j++
//             console.log(arr);
            
//         }
//     }
//     return arr
// }
//console.log(insertion([10,54,3, 9,4, 65, 32]));

function selection(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) { //was confused about the intil value of j whether 1 or i+1 realised both during dry run
            if (arr[j] < arr[min]) { //instead od min here placed i initially
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
        //console.log(arr);
        
    }
    return arr
}
console.log(selection([10,54,3, 9,4, 65, 32]));

