const {writeFile, readFile} = require("fs").promises;

const writer = async () => {
    try {
        await writeFile(
            './temporary/temp.txt',
            `\"Any fool can know. 
            The point is to understand.\" 
            - Albert Einstein 
            `
        );
    } catch (error) {
        console.log("Error writing file:", error)
    }
}

const reader = async () => {
    try {
        const readTextResult = await readFile('./temporary/temp.txt', 'utf8');
        console.log(readTextResult)
        return readTextResult
    } catch (error) {
        console.log("Error reading file:", error)
    }
}

const readWrite = async () => {
    try {
        await writer();
        await reader();
    } catch (error) {
        console.log("Error writing or reading function:", error)
    }
}

readWrite();