function three_sum(array) {
    let triplets = []
    array.sort((a,b) => a-b)
    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] === array[i - 1]) continue
        let j = i+1
        let k = array.length-1
        while(j<k) {
            let sum = array[i] + array[j] + array[k]
            if(sum < 0) {
                j++ //logically this is correct, i cant skip all duplicates of j for all k values just cause a single k didnt match, but somehow i cant find a array to verify this and i get the corrcet answer irrespective
            } else if(sum > 0) {
                k--
            }
            else  {
                let triplet = [array[i], array[j] , array[k]]
                triplets.push(triplet)
                //with the below 2 lines we ensure that j-1 exists and from there we check equivalency
                j++
                k--
                while(j < k && array[j] === array[j-1]) j++
                while(j < k && array[k] === array[k+1]) k--
            }
        }   
    }
    return triplets
}
console.log(three_sum([-1,0,1,2,-1,-4])); 
console.log(three_sum([-1,0,1,0]));
console.log(three_sum([-2, -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2]));
console.log(three_sum([-2, -1, -1, -1, 3, 4]));