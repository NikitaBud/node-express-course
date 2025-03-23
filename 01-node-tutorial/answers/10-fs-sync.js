const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '/temporary/fileA.txt');

writeFileSync(
  filePath,
  `\“The fool doth think he is wise, \n 
    but the wise man knows himself to be a fool.\” \n
    ― William Shakespeare
  `
);

const wisdomQuote = readFileSync(filePath, 'utf8');

console.log(wisdomQuote);