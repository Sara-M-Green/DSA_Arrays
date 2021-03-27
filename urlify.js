function removeSpaces(str) {
    newStr = str.replace(/ /g, '%20')
    return newStr
}

console.log(removeSpaces("tauhida parveen"))
console.log(removeSpaces("www.thinkful.com /tauh ida parv een"))

