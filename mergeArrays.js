function mergeArrays(arr1, arr2) {
    let result = []

    result = [...arr1, ...arr2]

    result.sort((a,b) => a-b)

    return result
}

arr1 = [1, 3, 6, 8, 11]
arr2 = [2, 3, 5, 8, 9, 10]

console.log(mergeArrays(arr1, arr2))