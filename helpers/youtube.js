const axios = require('axios')
const KEY = 'AIzaSyCaInXLQg4bJ7byt6xNLi-HR-iObLR1itA'

const videos = async (query) => {
    try {
        const video = await axios({
            url: 'https://www.googleapis.com/youtube/v3/search',
            params: {
                part: 'snippet',
                maxResults: 20,
                key: KEY,
                q: query
            }
        })
        return video.data.items
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}

module.exports = videos