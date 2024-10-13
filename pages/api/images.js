import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { folder } = req.query;
    console.log(`Fetching images from folder: ${folder}`); // Add logging
    const directoryPath = path.join(process.cwd(), 'public', folder);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Failed to read directory: ${directoryPath}`, err); // Add logging
            return res.status(500).json({ error: 'Failed to read directory' });
        }

        const images = files
            .filter(file => /\.(jpe?g|png|gif|bmp)$/i.test(file) && !/^bg\./i.test(file))
            .map(file => ({
                src: `${folder}/${file}`,
            }));

        res.status(200).json(images);
    });
}