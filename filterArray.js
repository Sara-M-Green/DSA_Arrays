function filterArray(arr) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(filterArray(arr))