const axios = require('axios');
// const youtubeId = 'UC-gKmuZfTgFrLaB2q68Dnog';

// elvn
const youtubeId = 'UCyQ-bvVWg83Q71A6vsR7h-Q';

const fetchYoutubeVideos = async (req, res, next) => {
	try {
		const response = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${youtubeId}&maxResults=10&order=viewCount&type=video&key=${process.env.YOUTUBE_API_KEY}`
		);
		let videoEmbeds = response.data.items.map((el) => {
			if (el.id.kind === 'youtube#video') {
				return `https://www.youtube.com/embed/${el.id.videoId}`;
			}
		});

		res.status(200).json({ videoEmbeds });
	} catch (err) {
		next(err);
	}
};

module.exports = fetchYoutubeVideos;
