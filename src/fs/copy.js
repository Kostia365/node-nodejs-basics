import fs from 'fs/promises';


const __dirname = import.meta.dirname;

const copy = async () => {
    try {
        await fs.access(__dirname + '/files_copy');
        console.error('Directory already exists!');
    } catch {
        const files = await fs.readdir(__dirname + '/files');
        console.log(files);
        await fs.mkdir(__dirname + 'files_copy', { recursive: true });
        await Promise.all(
            files.map(async (file) => {
                    await fs.copyFile(
                        __dirname + '${file}',
                        __dirname + '${file}'
                    );                
            })
        );
        console.log('All files were copied to files_copy');
    }
};

await copy();
