import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt')

const calculateHash = async () => {
    try {
        const text = await readFile(filePath, { encoding: 'utf8' });
        const hashString = createHash('sha256').update(text).digest('hex');
        console.log(hashString )
    } catch (err) {
        console.error(err.message);
    }

};

await calculateHash();