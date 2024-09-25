/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If current is less than next, it indicates subtraction
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};

module.exports = { romanToInt };
