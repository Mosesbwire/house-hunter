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

async function image(imageId) {
    try {
        const image = await Image.findById(imageId);
        if (!image) throw new ImageError('NotFound', 404);
        return image
    } catch (err) {
        throw new ImageError(err.message, 404);
    }
}

module.exports = {
    createImage,
    image
}