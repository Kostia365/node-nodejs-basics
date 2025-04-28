import { pipeline, Transform } from "stream";

const transform = async () => {
    const reverseStrTransform = new Transform({
        transform(chank, encoding, callback) {
            this.push(
                chank.toString().split('').reverse().join('').trim() + '\n'
            )
        callback();
        },
});
pipeline(process.stdin, reverseStrTransform, process.stdout, (err) => {
    if (err) throw new Error(err);
});
};

await transform();