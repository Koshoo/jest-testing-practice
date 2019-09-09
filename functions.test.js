const functions = require('./functions');

test('capitalize should Capitalize the string', () => {
  expect(functions.capitalize('hey')).toBe('Hey')
});

test('reverseString should reverse the string', () => {
  expect(functions.reverseString('hello')).toBe('olleh')
});

test('8 + 4 should equal 13', () => {
  expect(functions.calculator.add(8, 4)).toBe(12)
});

test('8 - 4 should equal 3', () => {
  expect(functions.calculator.subtract(8, 4)).toBe(4)
});

test('8 / 4 should equal 3', () => {
  expect(functions.calculator.divide(8, 4)).toBe(2)
});

test('8 * 4 should equal 32', () => {
  expect(functions.calculator.multiply(8, 4)).toBe(32)
});

test('caesarCipher Should cipher correctly', () => {
  expect(functions.caesarCipher.cipher('Hello there', 4)).toBe('lipps xlivi')
});

test('caesarCipher Should decipher correctly', () => {
  expect(functions.caesarCipher.decipher('Lipps xlivi', 4)).toBe('hello there')
});

test('analyzeArray should work correctly', () => {
  expect(functions.analyzeArray([1, 6, 3, 8, 6, 4, 1, 3])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 8
  })
});

test('analyzeArray should work correctly', () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})