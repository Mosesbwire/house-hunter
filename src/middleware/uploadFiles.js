const multer = require("multer")

const FILE_SIZE = 10 * 1024 * 1024


const memoryStorage = multer.memoryStorage()

const upload = multer({
    storage: memoryStorage,
    limits: {
        fileSize: FILE_SIZE
    },
    fileFilter: (req, files, cb) => {
        if (!files.mimetype.startsWith('image/')) {
            cb(new Error("File type not supported"), false)
        }
        cb(null, true)
    }
})

module.exports = upload