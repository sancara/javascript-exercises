const repeatString = function(word, number) {
    let result = ""
    if (number > 0) {
        for (let i = 0; i < number; i++) {
            result += word 
        }
        } else if (number < 0) {
            return 'ERROR';
        }    
    return result;
        
};

module.exports = repeatString;
