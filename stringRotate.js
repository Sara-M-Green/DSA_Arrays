function stringRotation(str1, str2) {
    const arr1 = str1.split('')
    const arr2 = str2.split('')

    const letter = arr2[0]
    const arr2Index = 0

    let letterIndex = []
    let arr1End = 0
    let arr2End = 0

    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] === letter){
            letterIndex.push(i)
        }
    }

    for (let i = 0; i < letterIndex.length; i++) {
        const arr1Letters = arr1[letterIndex[i]] + arr1[letterIndex[i] + 1]
        const arr2Letters = letter + arr2[arr2Index + 1]

        if (arr1Letters !== arr2Letters) {
            continue
        }

        compareLetters(arr1Letters, (letterIndex[i] + 2), arr2Letters, (arr2Index + 2))
        const remainArr1 = arr1.slice(0, letterIndex[i]).concat(arr1.slice((arr1End)))
        const remainArr2 = arr2.slice((arr2End))

        if (remainArr1.join('') === remainArr2.join('')) {
            return true
        }

        function compareLetters(arr1Ltr, arr1Ind, arr2Ltr, arr2Ind) {
            if (arr1Ind === arr1.length) {
                arr1End = arr1Ind
                arr2End = arr2Ind
                return [arr1Ind, arr2Ind]
            }
            
            if (arr1Ltr !== arr2Ltr) {
                arr1End = arr1End - 1
                arr2End = arr2End - 1
                return [(arr1Ind - 1), (arr2Ind - 1)]
            }
            
            const arr1Letters = arr1Ltr + arr1[arr1Ind]
            const arr2Letters = arr2Ltr + arr2[arr2Ind]

            compareLetters(arr1Letters, (arr1Ind + 1), arr2Letters, (arr2Ind + 1))
        }

        return false
    }

    
}

console.log(stringRotation('amazon', 'azonma'))