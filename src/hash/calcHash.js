import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    try {
        const text = await readFile('src/hash/files/fileToCalculateHashFor.txt', { encoding: 'utf8' });
        const hashString = createHash('sha256').update(text).digest('hex');
        console.log(hashString )
    } catch (err) {
        console.error(err.message);
    }

};

await calculateHash();