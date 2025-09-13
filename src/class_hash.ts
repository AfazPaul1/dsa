class HashTable {
    table: string[];
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
        return this.table[hash] = value
    }
    get(key:string) {
         return this.table[this.modularHash(key)]
    }
}

const hashTable = new HashTable();
//console.log(hashTable.modularHash("Jared Nielsen"));
hashTable.put("Jared Nielsen", "@jarednielsen")
console.log(hashTable.table);
const val = hashTable.get("Jared Nielsen")
console.log(val);

