// pages/api/images.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { folder } = req.query;
    if (!folder) {
        return res.status(400).json({ error: 'Folder name is required' });
    }

    const directoryPath = path.join(process.cwd(), 'public', folder);
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error(`Failed to read directory: ${directoryPath}`, err);
            return res.status(500).json({ error: 'Failed to read directory' });
        }
        const images = files.filter(file => /\.(jpe?g|png|gif|bmp)$/i.test(file)).map(file => ({
            src: `${process.env.NODE_ENV === 'production' ? '/pandj' : ''}/${folder}/${file}`,
            text: 'Caption'
        }));
        res.status(200).json(images);
    });
}