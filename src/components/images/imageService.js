const ImageDAL = require('./imagesDAL');

async function createImage(images, listingId, img=null) {
    if (img) {
        const res = imageBuffer(img);
        res['listing'] = listingId
        const image = await ImageDAL.createImage(res)
        return imageUrl(image.id)
    }
    const imagePromises = images.map(image => {
        const data = imageBuffer(image);
        data['listing'] = listingId

        return ImageDAL.createImage(data)
    })
    
    const data = await Promise.allSettled(imagePromises);
    console.log(data)
    const urls = data.map(dt => {
        if (dt.status === 'fulfilled') {
            return imageUrl(dt.value.id)
        }
    })
    return urls
}

function imageBuffer(image) {
    const baseString = Buffer.from(image.buffer).toString('base64');
    return {imageBuffer: baseString, mimeType: image.mimetype}
}

function imageUrl(imageId) {
    const uri = process.env.BASE_URL
    const url = `${uri}/api/v1/${imageId}`
    return url
}

module.exports = {
    createImage
}

