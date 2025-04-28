const parseArgs = () => {
    const args = process.argv.slice(2);

    for (let i = 0; i < args.length; i + 2) {
        const [key, value] = args[i].replace('--', '');
        console.log(`${key} is ${value}`);
    }
};

parseArgs();