const fetch = require("node-fetch")
const { FLICKR_API_KEY } = require("../../config/app")

exports.searchCategory = async (req, res) => {
    const { text, page } = req.query
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&text=${text}&per_page=20&page=${page}`

    let response
    let data

    try {
        response = await fetch(url)
        data = await response.json()
    } catch (error) {
        return res.status(500).json({ error: error.message, data: null })
    }

    if (data.stat !== 'ok') {
        return res.status(500).json({ error: data.message, data: null })
    }

    return res.status(200).json({ error: null, data: data.photos.photo })
}