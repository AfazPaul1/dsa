import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
});

const ask = (question: string): Promise<string> => rl.question(`${question} `)


const createHash = async () => {
  const len = await ask('Enter length of array')
  console.log("length:", len);
  const inputArr: number[] = []
  console.log(`Enter ${len} Numbers`);
  for (let i = 0; i < parseInt(len); i++) {
    inputArr.push(parseInt(await ask("")))
  }
  console.log(inputArr);
  const hash:Map<number,number> = new Map()
  for (const ele of inputArr) {
    hash.set(ele, (hash.get(ele) || 0) + 1)
    console.log(ele, hash.get(ele) || 0);
  }
  console.log(hash);
  
  rl.close()
  return len
}

createHash()




