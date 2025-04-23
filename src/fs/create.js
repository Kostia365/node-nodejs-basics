import fs from 'fs/promises';

const create = async () => {
    try {
        await fs.access('node-nodejs-basics/src/fs/files/fresh.txt');
        console.log('File already exists!');
    }
    catch (err) {
        console.error('File does not exist, creating a new one...');
        fs.appendFile('node-nodejs-basics/src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw console.error('file already exists!');
            console.log('File created successfully!');   
        });
    }
}
await create();