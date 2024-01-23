const { getImage } = require('./imageService')

async function fetchImage(req, res, next) {
    const { id } = req.params
    try {
        const file = await getImage(id);
        res.sendFile(file)
    } catch (err) {
        console.log(err);
        return res.status(404).json({error: 'Image not found'})
    }
}

module.exports = {
    fetchImage
}