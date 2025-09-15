function quadraticProbing(arr:number[], m:number) {
        const table = Array(m).fill(-1)

        function modularHash(key:number) {
            let hash = key%m
            if (table[hash] === -1) {
                table[hash] = key
            } else {
                //added i
                let i = 0
                while (table[hash] !== -1) {
                    i++
                    hash = (hash+i**2)%5
                }
                table[hash] = key
            }
            return hash
        }
        
        for(const ele of arr) {
            modularHash(ele)
        }
        
        return table
}
console.log(quadraticProbing([21, 10, 33, 43], 5));
