const {writeFile, readFile} = require("fs").promises;

writeFile('./temporary/temp.txt', '\"If you don\'t know where you are going, any road will get you there.\" \n ', {flag: 'a'})
 .then(() => {  
    return writeFile('./temporary/temp.txt', '\"Through the Looking-Glass, and What Alice Found There\", 1871 \n', {flag: 'a'})
 })  
 .then(() => {  
   return writeFile('./temporary/temp.txt', 'Lewis Carroll \n', {flag: 'a'})
})
 .then(() => {
    return readFile('./temporary/temp.txt', 'utf8');
 })
 .then((result) => console.log(result))
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })