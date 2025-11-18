function subarraySum(arr, target) {
        // code here
        let prefixSum = 0
        let startIdx = 0
        let curIdx = 0
        while(curIdx <= arr.length){
            while(prefixSum > target) {
                prefixSum-=arr[startIdx]
                startIdx++
            }
            if(prefixSum === target){
                return [startIdx+1, curIdx]
            }
            else if(prefixSum < target) {
                prefixSum+=arr[curIdx]
                curIdx++
            }
        }
        return [-1]
 }
 console.log(subarraySum([12, 2, 3, 7, 5], 12));
 