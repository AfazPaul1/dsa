const  Union_of_Two_Sets = (a: number[], b: number[]) => {
 const setNew = new Set([...a, ...b ])       
 return setNew
}
const hh  =  Union_of_Two_Sets([1,2,3,4],  [1,2,3,4,5])
console.log(hh);
