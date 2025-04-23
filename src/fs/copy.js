import fs from 'fs/promises';

const copy = async () => {
    try {
        await fs.access('node-nodejs-basics/src/fs/files_copy');
        console.error('Directory already exists!');
    } catch {
        const files = await fs.readdir('node-nodejs-basics/src/fs/files');
        console.log(files);
        await fs.mkdir('node-nodejs-basics/src/fs/files_copy', { recursive: true });
        await Promise.all(
            files.map(async (file) => {
                    await fs.copyFile(
                        `node-nodejs-basics/src/fs/files/${file}`,
                        `node-nodejs-basics/src/fs/files_copy/${file}`
                    );                
            })
        );
        console.log('All files were copied to files_copy');
    }
};

await copy();
