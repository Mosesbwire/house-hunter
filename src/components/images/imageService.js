const fs = require('node:fs')
const ImageError = require('./imageError');
const ImageDAL = require('./imagesDAL');
const ListingError = require('../listings/listingError');

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

function createImageTmpDir() {
    try {
        fs.mkdirSync(`${__dirname}/tmp`)
    } catch (err) {
        if (err instanceof Error && err.message.split(":")[0] === 'EEXIST') {
            return
        }
        throw new Error('Failed to create tmp file at: ' + __dirname + '/tmp')
    }
}

function bufferImage(image) {
    try {
        const path = `${__dirname}/tmp`
        const mimetype = image.mimeType.split('/')[1]
        const fullPath = `${path}/${image.id}.${mimetype}`
        fs.writeFileSync(fullPath, Buffer.from(image.imageBuffer, 'base64'));
        return fullPath
    } catch (err) {
        console.log(err)
        return new ListingError('Failed to write image', 500);
    }
}

function imageUrl(imageId) {
    const uri = process.env.BASE_URL
    const url = `${uri}/api/v1/images/${imageId}`
    return url
}

async function getImage(imageId) {
    try {
        const image = await ImageDAL.image(imageId);

        return bufferImage(image);

    } catch (err) {
        if(err instanceof ImageError){
            throw err
        }
    }
}

module.exports = {
    createImage,
    getImage,
    createImageTmpDir
}

