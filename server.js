const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3001;


app.use(cors());


const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });


app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file || req.file.size === 0) {
    console.error("No file received or file is empty");
    return res.status(400).send("No file uploaded or file is empty.");
  }

  
  const fileUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
  console.log("File uploaded successfully:", req.file);

 
  res.json({ fileUrl });
});


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
