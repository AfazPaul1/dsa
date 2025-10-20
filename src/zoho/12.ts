// JavaScript Program to generate all unique
// permutations of a string

// Recursive function to generate 
// all permutations of string s
function recurPermute(index, s, ans) {

    // Base Case
    if (index === s.length) {
        ans.add(s.join(""));
        return;
    }

    // Swap the current index with all
    // possible indices and recur
    for (let i = index; i < s.length; i++) {
        [s[index], s[i]] = [s[i], s[index]];
        recurPermute(index + 1, s, ans);
        [s[index], s[i]] = [s[i], s[index]];
    }
}

// Function to find all unique permutations
function findPermutation(s) {

    // sort input string
    s = s.split("").sort();

    // Stores all unique permutations
    let res = new Set();
    recurPermute(0, s, res);

    // Convert Set to Array for the final answer
    return Array.from(res).sort();
}

//Driver code
const s = "ABC";
const res = findPermutation(s);
console.log(res.join(" "));