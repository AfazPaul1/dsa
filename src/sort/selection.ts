function sel(arr: number[]) {
    for (let i = 0; i <= arr.length-2; i++) {
        let min = i
        for (let j = i+1; j <= arr.length-1; j++) {
            //console.log(arr[j], j);          
            //find smallest
            // so theres going to be a if here which checks a[i] against a [j]
            //but thats not how
            //we have a var min which gets the i initially if we find a j value which is smaller than i value then we update that min var to hold it. then all future j's are compared against it
            //now i dont have to do the swap inside the j loop which was my initial worry about how i was going to it i cant so how can i get j outside looks like the answer is min
            console.log(arr[j], arr[min]);
            
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}
console.log(sel([13, 46, 24, 52, 20, 9]));
