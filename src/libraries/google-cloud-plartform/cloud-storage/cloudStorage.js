const { Storage } = require("@google-cloud/storage")
require("dotenv").config()

const projectId = process.env.GCP_PROJECT_ID
const bucketName = process.env.CLOUD_STORAGE_BUCKET_NAME
const storage = new Storage({projectId})
const bucket = storage.bucket(bucketName)

async function getReadImageUrl(imageNames, listingId){
    const sevenDaysInSeconds = 604800
    const config = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + sevenDaysInSeconds
    }
    let signedUrls = []
    for await (const name of imageNames){
        let fullFileName = `listings/${listingId}/${name}`
        const url = await bucket.file(fullFileName).getSignedUrl(config)
        
        signedUrls.push(url[0])
    }
    return signedUrls   
}

async function upload_cloud_storage(folderName, image_buffers) {
    image_buffers.forEach( image => {
        bucket.file(`listings/${folderName}/${image.originalname}`).save(image.buffer)
    });
}

module.exports = {
    getReadImageUrl,
    upload_cloud_storage
    
}