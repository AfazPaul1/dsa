class quadraticHashTable {
    table: number[];
    size:number;
    constructor(size:number) {
        this.size = size
        this.table = Array(size).fill(-1) //how else can i have -1 in empty slots?
    }
    
    modularHash(key:number) {
        let hash = key%this.size
        if (this.table[hash] === -1) {
            this.table[hash] = key
        } else {
            //added i
            let i = 0
            while (this.table[hash] !== -1) {
                i++
                hash = (hash+i**2)%5
            }
            this.table[hash] = key
        }
        return hash
    }
    //no need for a seprate has? just use the index to get from table like table[i]
    put(key:number) {
        let hash = this.modularHash(key)
    }

}
const tab = new quadraticHashTable(5)
//const hash1 = tab.modularHash(5)
const arr1 = [21, 10, 33, 43]
for (const ele of arr1) {
    tab.put(ele)
}
console.log(tab.table);

