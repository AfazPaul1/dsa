function get_single_element(arr) {
    const hash = new Map<Number, number>()
    for (const element of arr) {
        hash.set(element, (hash.get(element) || 0) + 1)
    }
    for (const [element, value] of hash) {
        if(value === 1) return element
    }
}
console.log(get_single_element([1,7, 2,3, 1,2, 4, 3,7 ]));
