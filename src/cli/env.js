const parseEnv = () => {
    const args = process.argv.slice(2);
    
    for (let i = 0; i < args.length; i++) {
        if (args[i].startsWith('RSS_')) {
            const [key, value] = args[i].split('=');
            console.log(`${key} : ${value}`); 
           }
        }
};

parseEnv()