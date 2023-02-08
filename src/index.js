module.exports = function reverse (n) {
    let numString = n.toString();
    let newNumString = '';
    for (let i = numString.length - 1; i >= 0 ; --i) {
        newNumString += numString[i];
    }
    return Number(newNumString.replace('-', ''))

}
