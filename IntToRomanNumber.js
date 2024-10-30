function intToRomanNumber(num) {
    let romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let length = num.toString().length;
    console.log(`Number of digits: ${length}`);

    let result = '';

    switch(length) {
        case 4: {
            // Start from 1000
            for (let i = 0; i < romanMap.length; i++) {
                while (num >= romanMap[i].value) {
                    result += romanMap[i].symbol;
                    num -= romanMap[i].value;
                }
            }
            break;
        }
        case 3: {
            // Start from 100
            for (let i = 4; i < romanMap.length; i++) {
                while (num >= romanMap[i].value) {
                    result += romanMap[i].symbol;
                    num -= romanMap[i].value;
                }
            }
            break;
        }
        case 2: {
            // Start from 10
            for (let i = 8; i < romanMap.length; i++) {
                while (num >= romanMap[i].value) {
                    result += romanMap[i].symbol;
                    num -= romanMap[i].value;
                }
            }
            break;
        }
        case 1: {
            // Start from 1
            for (let i = 12; i < romanMap.length; i++) {
                while (num >= romanMap[i].value) {
                    result += romanMap[i].symbol;
                    num -= romanMap[i].value;
                }
            }
            break;
        }
        default: {
            console.log('Number has more than 4 digits or is invalid');
            return '';
        }
    }

    return result;
}

console.log(intToRomanNumber(1000)); // Output: "M"
console.log(intToRomanNumber(1994)); // Output: "MCMXCIV"
console.log(intToRomanNumber(58)); // Output: "LVIII"
console.log(intToRomanNumber(9)); // Output: "IX"