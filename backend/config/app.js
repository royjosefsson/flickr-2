const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const {
    PORT,
    FLICKR_API_KEY
} = process.env;

module.exports = {
    PORT,
    FLICKR_API_KEY
}