const multer = require("multer")

const FILE_SIZE = 10 * 1024 * 1024

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: FILE_SIZE
    },
    fileFilter: (req, res, cb)=> {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true)
        } else {
            cb(new Error("File type not supported"))
        }
    }
})

module.exports = upload