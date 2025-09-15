class quadraticHashTable {
    table: number[];
    size:number;
    constructor(size:number) {
        this.size = size
        this.table = []
    }
    modularHash(key:number) {
        const hash = key%this.size
        return hash
    }
    //no need for a seprate has? just use the index to get from table like table[i]
    put(key:number) {
        let hash = this.modularHash(key)
        if (this.table[hash] === undefined) {
            this.table.push(key)
        } else {
            //added i
            let i = 0
            while (this.table[hash] !== undefined) {
                i++
                hash = 
                //hash = hash**2 //how do i do square like += but i dont need the older value right? just its square we are reassigninging
                //ok thats not how we do it


            }
        }
    }

}
const tab = new quadraticHashTable(5)
const hash1 = tab.modularHash(5)
console.log(hash1);

