const fs = require('fs');
const path = require('path');
const { ExifTool } = require('exiftool-vendored');

// Check for the --production flag
const isProduction = process.argv.includes('--production');
const basePath = isProduction ? '/pandj' : '';

const folders = ['turksandcaicos', 'newyork', 'washingtondc2024', 'washingtondc2023', 'washingtondcdaytrip'];
const exiftool = new ExifTool();

function formatDateToEST(dateString) {
    const date = new Date(dateString);
    const options = {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    return date.toLocaleString('en-US', options);
}

async function getMetadata(filePath) {
    try {
        const metadata = await exiftool.read(filePath);
        const title = metadata.Title || '';
        const dateOriginal = metadata.DateTimeOriginal || metadata.CreateDate;
        let date = '';

        if (dateOriginal) {
            date = formatDateToEST(dateOriginal);
        }

        return { title, date };
    } catch (error) {
        console.error(`Failed to read metadata for file: ${filePath}`, error);
        return { title: 'Caption', date: '' };
    }
}

async function generateJson() {
    for (const folder of folders) {
        const directoryPath = path.join(process.cwd(), 'public', folder);
        const jsonPath = path.join(process.cwd(), 'public', 'json', `${folder}.json`);

        // Ensure the json directory exists
        if (!fs.existsSync(path.join(process.cwd(), 'public', 'json'))) {
            fs.mkdirSync(path.join(process.cwd(), 'public', 'json'), { recursive: true });
        }

        // Read existing JSON file if it exists
        let existingImages = [];
        if (fs.existsSync(jsonPath)) {
            const existingData = fs.readFileSync(jsonPath, 'utf8');
            existingImages = JSON.parse(existingData);
        }

        const files = fs.readdirSync(directoryPath);
        const newImages = [];

        for (const file of files) {
            if (/\.(jpe?g|png|gif|bmp|mp4|mov)$/i.test(file) && !/^bg\./i.test(file)) {
                const filePath = path.join(directoryPath, file);
                const { title, date } = await getMetadata(filePath);
                newImages.push({
                    src: `${basePath}/${folder}/${file}`,
                    title: title,
                    date: date
                });
            }
        }

        // Merge new images with existing images, avoiding duplicates
        const mergedImages = [...existingImages, ...newImages.filter(newImage => !existingImages.some(existingImage => existingImage.src === newImage.src))];

        fs.writeFileSync(jsonPath, JSON.stringify(mergedImages, null, 2));
    }

    await exiftool.end();
}

generateJson().catch(error => {
    console.error('Error generating JSON files:', error);
});