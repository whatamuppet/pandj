// scripts/generateImageJson.js
const fs = require('fs');
const path = require('path');

const folders = ['turksandcaicos', 'newyork', 'homepage'];

folders.forEach(folder => {
    const directoryPath = path.join(process.cwd(), 'public', folder);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Failed to read directory: ${directoryPath}`, err);
            return;
        }
        const images = files.filter(file => /\.(jpe?g|png|gif|bmp)$/i.test(file)).map(file => ({
            src: `${process.env.NODE_ENV === 'production' ? '/pandj' : ''}/${folder}/${file}`,
            text: 'Caption'
        }));
        const jsonPath = path.join(process.cwd(), 'public', `${folder}.json`);
        fs.writeFileSync(jsonPath, JSON.stringify(images, null, 2));
    });
});