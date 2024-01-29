import { access, constants, writeFile } from 'node:fs/promises';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fresh.txt')

const fileExist = async () => {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false
    }
}
const create = async () => {
    const isExist = await fileExist()
    if (isExist) {
        throw new Error("FS operation failed");
    }
    try {
        await writeFile(filePath, 'I am fresh and young', );
    } catch (err) {
        throw new Error("FS operation failed");
    }




}

await create();