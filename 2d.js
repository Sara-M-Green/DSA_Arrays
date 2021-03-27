function zeroSearch(arr) {
    let result = arr

    arr.map((row, rowI) => {
        row.map((item, arrI) => {
            if (item === 0) {
                result[rowI].forEach((num, i) => result[rowI][i] = 0)
                result.forEach(newRow => newRow[arrI])
            }
        })
    })

    return result
}

const array = [
    [1,1,1,1,1],
    [0,1,1,1,0],
    [1,1,0,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
];

console.log(zeroSearch(array))