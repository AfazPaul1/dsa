function quadraticProbing(arr:number[], m:number) {
        const table = Array(m).fill(-1)

        function modularHash(key:number) {
            let hash = key%m
            
            if (table[hash] === -1) {
                table[hash] = key
            } else {
                //added i
                let i = 0
                let calcHash = hash
                console.log("collision");
                
                console.log(`index: ${i} key: ${key} orginalHash:${hash}`);
                while (table[calcHash] !== -1) {
                    console.log("inside while");
                    console.log("i: " + i + " failed hash: " + hash);
                    i++
                    console.log(i);
                    calcHash = (hash+(i**2))%m
                }
                console.log("finalHash " + hash);
                table[calcHash] = key
            }
            return hash
        }
        for(const ele of arr) {
            modularHash(ele)
        }
        return table
}
//console.log(quadraticProbing([21, 10, 33, 43], 5));
console.log(quadraticProbing([85, 50, 19, 38, 66, 47], 19));
//expected
//[19, 38, -1, -1, -1, -1, -1, -1, -1, 85, 66, -1, 50, 47, -1, -1, -1, -1, -1]