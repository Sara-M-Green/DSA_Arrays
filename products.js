function products(arr) {
    let result = arr.map((num, i) => {
        const products = arr.slice(0, i).concat(arr.slice((i+ 1), (arr.length)))
        return products.reduce((acc, curr) => acc * curr)
    })
        return result
}

console.log(products([1, 3, 9, 4]))