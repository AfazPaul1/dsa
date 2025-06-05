import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
});

const ask = (question: string): Promise<string> => rl.question(`${question} `)


const charHash = async () => {
    const str = await ask("enter a string")
    
     const hash:number[] = Array.from({length: 26}, (_, i) => 0)
    for (let i = 0; i < str.length; i++) {
        hash[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        console.log(str[i], hash[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]);
        
        
    }
    console.log(hash)

    
    const count = parseInt(await ask("enter number of characters we want to count for"))
    //const arrChar: string[] = []
    console.log("enter characters");
     for (let i = count; i > 0 ; i--) {
        const val = (await ask(""))
        
        console.log(hash[val.charCodeAt(0) - 'a'.charCodeAt(0)]);
        
    }
    rl.close()
}

charHash()
   
    