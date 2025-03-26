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
        console.log(error)
    }
}

const reader = async () => {
    try {
        return await readFile('./temporary/temp.txt', 'utf8')
    } catch (error) {
        console.log(error)
    }
}

const readWrite = async () => {
    try {
        const readTextResult = await reader();
        console.log(readTextResult);
        await writer();
    } catch (error) {
        console.log(error)
    }
}

readWrite();