import fs from "fs";
import { stdin } from 'node:process';

const write = async () => {
    const writableStream = fs.createWriteStream('src/streams/files/fileToWrite.txt');

    stdin.pipe(writableStream)
};

await write();