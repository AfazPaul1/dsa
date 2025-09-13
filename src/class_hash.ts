class HashTable {
    table: string[][];
    constructor() {
        this.table = [];
    }

    modularHash(key:string) {
        let sum = 0;

        for (let i = 0; i < key.length; ++i) {
            sum += key.charCodeAt(i);
        }

        let hash = sum % 71;

        return hash;
    }

    put(key:string, value:string) {
        let hash = this.modularHash(key)
        if (this.table[hash] === undefined) {
            return this.table[hash] = [key, value]
        } else {
            while (this.table[hash] !== undefined) {
                hash++
            }
            return this.table[hash] = [key, value]
        }
    }
    get(key:string) {
        let hash = this.modularHash(key)
        while (this.table[hash][0] !== key) {
            hash++
        }
        return this.table[hash][1]

    }
}

const hashTable = new HashTable();
//console.log(hashTable.modularHash("Jared Nielsen"));
hashTable.put("Jared Nielsen", "@jarednielsen")
hashTable.put("NASA", "@nasa");
hashTable.put("ASAN", "@asan");
console.log(hashTable.table);
const val = hashTable.get("Jared Nielsen")
console.log(val);
console.log(hashTable.get("ASAN"));