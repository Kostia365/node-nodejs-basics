import { fork } from "child_process";
import path from "path";

const __dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
    const childProcessPath = path.join(__dirname, "files", "script.js");
    const childProcess = fork(childProcessPath, [...args],{ silent: true });
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('error', (err) => {
        throw new Error(err);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);