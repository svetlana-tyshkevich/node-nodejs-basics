import fs from 'fs';

const create = async () => {

    fs.access('src/fs/files/fresh.txt', fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                if (err) throw err;
            });
        } else {
            throw new Error("FS operation failed");
        }
    })
}

await create();