import fs from "fs";

const copy = async () => {
    fs.access('src/fs/files', fs.constants.F_OK, (err) => {
        if (err) throw new Error("FS operation failed");
        fs.mkdir('src/fs/copy-files', (err) => {
            if (err) throw new Error("FS operation failed");
            fs.readdir('src/fs/files', (err, data) => {
                if (err) throw new Error("FS operation failed");
                if (data.length) {
                    data.forEach((file) => fs.copyFile(`src/fs/files/${file}`, `src/fs/copy-files/${file}`, (err) => {
                            if (err) throw err;
                        })
                    )
                }
            });
        })
    })
};

await copy();
