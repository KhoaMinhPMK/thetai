const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const UPLOAD_PASSWORD = process.env.UPLOAD_PASSWORD || 'sankit2026';

app.use(cors());
app.use(express.json({ limit: '500mb' }));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Auth middleware
function authenticate(req, res, next) {
    const token = req.headers['x-edit-token'];
    if (token === UPLOAD_PASSWORD) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized. Invalid edit token.' });
    }
}

// Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

const OVERRIDES_FILE = path.join(__dirname, 'uploads', 'overrides.json');

app.get('/api/overrides', (req, res) => {
    if (fs.existsSync(OVERRIDES_FILE)) {
        const data = fs.readFileSync(OVERRIDES_FILE, 'utf8');
        try {
            res.json(JSON.parse(data));
        } catch (e) {
            res.json({});
        }
    } else {
        res.json({});
    }
});

app.post('/api/upload', authenticate, upload.single('mediaFile'), (req, res) => {
    try {
        const key = req.body.key;
        if (!key) {
            return res.status(400).json({ error: 'Media key is required' });
        }
        
        let fileUrl;
        let isDelete = false;
        if (req.file) {
            // file upload
            fileUrl = '/uploads/' + req.file.filename;
        } else if (req.body.url !== undefined) {
            // direct url update or delete
            fileUrl = req.body.url;
            if (fileUrl.trim() === '') isDelete = true;
        } else {
            return res.status(400).json({ error: 'No file or url provided' });
        }

        // Update overrides.json
        let overrides = {};
        if (fs.existsSync(OVERRIDES_FILE)) {
            try {
                overrides = JSON.parse(fs.readFileSync(OVERRIDES_FILE, 'utf8'));
            } catch (e) {}
        }
        
        if (isDelete) {
            delete overrides[key];
        } else {
            overrides[key] = fileUrl;
        }
        fs.writeFileSync(OVERRIDES_FILE, JSON.stringify(overrides, null, 2), 'utf8');

        res.json({ success: true, url: fileUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Upload failed' });
    }
});

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
});
