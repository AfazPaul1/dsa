function ten(str1, str2) {
    const hash = new Set()
    for (const ele of str2) {
        hash.add(ele)
    }
    let newStr = ""
    for (const ele of str1) {
        if (!hash.has(ele)) {
            newStr+=ele
        }
    }
    return newStr
}
const s1 = "expErience"
const s2 = 'En'
console.log(ten(s1, s2));
