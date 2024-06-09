import express, { Request, Response } from 'express';
import multer, { StorageEngine } from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3001;

// Ensure the uploads directory exists
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Set up multer for file upload
const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const videoId = file.originalname.split('_frame_')[0]; // uuid
    if (!fs.existsSync(path.join(uploadPath, videoId))) {
      fs.mkdirSync(path.join(uploadPath, videoId));
    }
    cb(null, path.join(uploadPath, videoId));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Handle file upload
app.post(
  '/upload',
  upload.array('images', 100),
  (req: Request, res: Response) => {
    console.log(req.files?.length, 'images uploaded');
    res.send('Images uploaded');
  }
);

// Serve a simple home page
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the image upload server.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
