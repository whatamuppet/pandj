const fs = require('fs');
const path = require('path');

// Check for the --production flag
const isProduction = process.argv.includes('--production');
const basePath = isProduction ? '/pandj' : '';

const folders = ['turksandcaicos', 'newyork', 'homepage'];

folders.forEach(folder => {
    const directoryPath = path.join(process.cwd(), 'public', folder);
    const jsonPath = path.join(process.cwd(), 'public', `${folder}.json`);

    // Read existing JSON file if it exists
    let existingImages = [];
    if (fs.existsSync(jsonPath)) {
        const existingData = fs.readFileSync(jsonPath, 'utf8');
        existingImages = JSON.parse(existingData);
    }

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Failed to read directory: ${directoryPath}`, err);
            return;
        }

        const newImages = files
            .filter(file => /\.(jpe?g|png|gif|bmp)$/i.test(file)) // Filter image files
            .filter(file => !/^bg\./i.test(file)) // Exclude files named bg.*
            .map(file => ({
                src: `${basePath}/${folder}/${file}`,
                text: 'Caption'
            }));

        // Merge new images with existing images, avoiding duplicates
        const mergedImages = [...existingImages, ...newImages.filter(newImage => !existingImages.some(existingImage => existingImage.src === newImage.src))];

        fs.writeFileSync(jsonPath, JSON.stringify(mergedImages, null, 2));
    });
});