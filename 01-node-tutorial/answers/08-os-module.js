const os = require('os');
const platform = os.platform();
const release = os.release();
const version = os.version();

console.log("Platform: ", platform);
console.log("Release: ", release);
console.log("Version: ", version);