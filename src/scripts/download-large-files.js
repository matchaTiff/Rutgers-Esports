const fs = require('fs');
const ytdl = require('ytdl-core');

const sources = fs.existsSync('sources.json') ? JSON.parse(fs.readFileSync('sources.json')) : {};

console.log('Started download-large-files.js script.');

// videos
if (sources.videos) {
    const { videos } = sources;
    for (const video of videos) {
        const { filename, link } = video;
        const filePath = `../../public/Videos/${filename}`;
        const doesFileExist = fs.existsSync(filePath);

        if (!doesFileExist) { console.log(`Started downloading ${filename}.`); } else {
            console.log(`${filename} exists. Not redownloading. Delete this file locally and rerun the script to download.`);
            continue;
        }

        const writeableStream = ytdl(link)
            .pipe(fs.createWriteStream(filePath));

        writeableStream.on('finish', () => {
            console.log(`Finished downloading ${filename}.`);
        });

        writeableStream.on('error', () => {
            console.log(`Error downloading ${filename}.`);
        });
    }
}

// ... other types of large files
