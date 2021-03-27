function maxSum(arr) {
    let sum = 0
    let maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i] + arr[i + 1]

        if (sum > maxSum) {
            maxSum = sum
        }
    }
    return maxSum;
}

const array = [4, 6, -3, 5, -2, 1]

console.log(maxSum(array))
