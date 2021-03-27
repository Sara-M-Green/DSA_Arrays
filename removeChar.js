function removeCharacters(str) {
    const lettersToRemove = 'aeiou'

    const removedLettersArray = []
    const result = []

    for (let i = 0; i < lettersToRemove.length; i ++) {
        removedLettersArray.push(lettersToRemove[i])
    }

    for (let i = 0; i < str.length; i ++) {
        result.push(str[i])
    }

    removedLettersArray.forEach(letter => {
        for (let i = 0; i < result.length; i++) {
            if (letter === result[i]) {
                result.splice(i, 1)
            }
        }
    })

    const resultString = result.reduce((acc, curr) => {
        return acc + curr
    })

    return resultString

    
}

console.log(removeCharacters("Battle of the Vowels: Hawaii vs. Grozny"))