const { writeFile } = require("fs");
const path = require('path');

const filePath = path.join(__dirname, '/temporary/fileB.txt');

console.log("at start");
writeFile(filePath, "This is line 1\n", {flag: 'a'}, (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(filePath, "This is line 2\n", {flag: 'a'}, (err, result) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
            writeFile(filePath, "This is line 3\n", {flag: 'a'}, (err, result) => {
                console.log("at point 3");
                if (err) {
                  console.log("This error happened: ", err);
                }
              });
        }
      });
  }
});
console.log("at end");