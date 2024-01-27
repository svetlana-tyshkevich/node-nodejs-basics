import fs from "fs";

const list = async () => {
    fs.readdir('src/fs/files', {encoding: 'utf-8'}, (err, data) => {
       if (err) throw new Error("FS operation failed");
        console.log(data)
    })
};

await list();