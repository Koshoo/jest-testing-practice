const functions = {
  capitalize: string => string[0].toUpperCase() + string.slice(1),
  reverseString: (string) => string.split('').reverse().join(''),
  calculator: {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
  },
  caesarCipher: {
    cipher: (str, key) => {
      const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let abcAdjusted = abc.map((a) => a);
      str = str.toLowerCase();
      let i;

      for (i = 0; i < key; i++) {
        let j = abcAdjusted.shift();
        abcAdjusted.push(j);
      }
      let cipheredWord = '';

      for (i = 0; i < str.length; i++) {
        let ind = abc.indexOf(str[i]);
        if (ind !== -1) {
          cipheredWord += abcAdjusted[ind];
        } else {
          cipheredWord += " "
        }
      }

      return cipheredWord;
    },
    decipher: (str, key) => {
      let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
      let abcAdjusted = abc.map((a) => a);

      str = str.toLowerCase();
      let i;
      for (i = 0; i < key; i++) {
        let j = abcAdjusted.shift();
        abcAdjusted.push(j);
      }
      let decipheredWord = '';

      for (i = 0; i < str.length; i++) {
        let ind = abcAdjusted.indexOf(str[i]);
        if (ind !== -1) {
          decipheredWord += abc[ind];
        } else {
          decipheredWord += " "
        }
      }

      return decipheredWord;
    }
  },
  analyzeArray: (arr) => {
    return {
      average: Math.floor(arr.reduce((sum, num) => {
        return sum + num;
      }) / arr.length),
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    }
  }
}


console.log(functions.analyzeArray([1, 2, 4, 3]))



module.exports = functions;