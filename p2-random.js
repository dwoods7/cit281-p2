/*
CIT 281 Project 2
Name: Daniel Woods
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
console.log(result);

// Returns a random letter
function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet.charAt(randomIndex);
}

console.log(getRandomLetter());

// Returns a random-length string of random letters by calling getRandomLetter()
function getRandomString(minLength, maxLength) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let string = '';
    for (let i = 0; i < length; i++) {
      string += getRandomLetter();
    }
    return string;
}

console.log(getRandomString(10,20));

// This function takes an input "string" and sorts it in alphabetical order
function getSortedString(string) {
    return string.split('').sort().join('');
}