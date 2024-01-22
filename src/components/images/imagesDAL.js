const Image = require('./image')
const ImageError = require('./imageError')

async function createImage(imageData) {
    try {
        const image = new Image(imageData);
        return await image.save()
    } catch (err) {
        throw new ImageError(err.message, 400);
    }
}

module.exports = {
    createImage
}