import fs from 'fs';

const list = async () => {
fs.readdir('node-nodejs-basics/src/fs/files', (err, files) => {
    if (err) {
        console.error('FS operation failed');
        return;
    }
    for (let file of files) {
        console.log(file);
    }
});
};

await list();