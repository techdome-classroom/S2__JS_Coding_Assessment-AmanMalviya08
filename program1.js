/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in mapping) {
            // Check for matching opening bracket
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push onto the stack
            stack.push(char);
        }
    }
    
    // If stack is empty, all brackets were matched
    return stack.length === 0;
};

module.exports = { isValid };
