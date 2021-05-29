const reverseString = function(word) {
    let palabra = ""
    for (let i = word.length-1; i >= 0; i--) {
        palabra += word[i]   
    }
    return palabra;
};

module.exports = reverseString;
