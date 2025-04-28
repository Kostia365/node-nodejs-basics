import fs from 'fs/promises';

const __dirname = import.meta.dirname

const create = async () => {
    try {
        await fs.access(__dirname + '/files/fresh.txt');
        console.log('File already exists!');
    }
    catch (err) {
        console.error('File does not exist, creating a new one...');
        fs.appendFile(__dirname + '/files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw console.error('file already exists!');
            console.log('File created successfully!');   
        });
    }
}
await create();