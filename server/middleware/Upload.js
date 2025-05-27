const mongoose = require("mongoose");
const multer = require("multer");
const { Readable } = require("stream");
const File = require("../models/FileModel");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadFile = async (req, res) => {
  try {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });

    const { file } = req;
    if (!file) return res.status(400).json({ message: "No file uploaded" });

    const { originalname, mimetype, buffer } = file;

    console.log(
      "Starting upload to GridFS...",
      originalname,
      mimetype,
      buffer.length
    );

    const readStream = new Readable();
    readStream.push(buffer);
    readStream.push(null);

    const uploadStream = bucket.openUploadStream(originalname, {
      contentType: mimetype,
    });

    readStream
      .pipe(uploadStream)
      .on("error", (err) => {
        console.error("Upload Error:", err);
        res.status(500).json({ message: "Error uploading file" });
      })
      .on("finish", async () => {
        try {
          const newFile = new File({
            filename: originalname,
            mimeType: mimetype,
            size: buffer.length,
            contentType: mimetype,
            gridFsId: uploadStream.id,
            chatId: req.body.chatId,
            senderId: req.body.senderId,
          });

          const savedFile = await newFile.save();

          res.status(200).json({
            message: "File uploaded successfully",
            file: savedFile,
          });
        } catch (saveErr) {
          console.error("File Save Error:", saveErr);
          res.status(500).json({ message: "Failed to save file metadata" });
        }
      });
  } catch (err) {
    console.error("Upload Exception:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = { upload, uploadFile };
