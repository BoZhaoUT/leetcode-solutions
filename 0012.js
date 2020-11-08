/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const thousands = ["", "M", "MM", "MMM"]
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX",  "LXX", "LXXX", "XC"]
    const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
    const thousandsDigit = Math.floor(num / 1000)
    const hudnredsDigit = Math.floor((num % 1000) / 100)
    const tensDigit = Math.floor((num % 100) / 10)
    const unitsDigit = Math.floor(num % 10)
    return thousands[thousandsDigit] + hundreds[hudnredsDigit] + tens[tensDigit] + units[unitsDigit]
}

var intToRoman2 = function(num) {
    let result = ""
    let multiple = 0
    while (num > 0) {
        if (num >= 1000) {
            num -= 1000
            result += "M"
        } else if (num >= 900) {
            // special case
            num -= 900
            result += "CM"
        } else if (num >= 500) {
            num -= 500
            result += "D"
        } else if (num >= 400) {
            num -= 400
            result += "CD"
        } else if (num >= 100) {
            num -= 100
            result += "C"
        } else if (num >= 90) {
            num -= 90
            result += "XC"
        } else if (num >= 50) {
            num -= 50
            result += "L"
        } else if (num >= 40) {
            num -= 40
            result += "XL"
        } else if (num >= 10) {
            num -= 10
            result += "X"
        } else if (num >= 9) {
            num -= 9
            result += "IX"
        } else if (num >= 5) {
            num -= 5
            result += "V"
        } else if (num >= 4) {
            num -= 4
            result += "IV"
        } else {
            num -= 1
            result += "I"
        }
    }
    return result
};
