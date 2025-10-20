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

// function selection(arr:number[]) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i
//         for (let j = i+1; j < arr.length; j++) { //was confused about the intil value of j whether 1 or i+1 realised both during dry run
//             if (arr[j] < arr[min]) { //instead od min here placed i initially
//                 min = j
//             }
//         }
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//         //console.log(arr);
        
//     }
//     return arr
// }
// console.log(selection([10,54,3, 9,4, 65, 32]));

function bubble(arr) {
    for (let i = arr.length-1; i > 0; i--){ //is arr.length-1 really required?  //AH YES AT ONE POINT WHEN J = 6 there is no 7th index to check against so its arr.length-1
        let isSwapped = false
        for (let j = 0; j < arr.length-1; j++) {
            //console.log("hi");
            
            if(arr[j] > arr[j+1]){ 
                console.log(arr[j], arr[j+1]);
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                isSwapped = true
            }
        }
        if (isSwapped === false) {
            return arr
        }
       
    }
    return arr
}
console.log(bubble([10,54,3, 9,4, 65, 32] ));
// console.log(bubble([
//    3,  4,  9, 10,
//   32, 54, 65
// ] ));