const axios = require('axios');
const cheerio = require('cheerio');

const craigslistScrape = () => {
	return axios.get('https://sfbay.craigslist.org/search/sof?query=web+developer&search_distance=50&postal=95112&employment_type=1&employment_type=3').then(res => {
		const $ = cheerio.load(res.data);
		let articles = [];

		$('.result-info').each((i, element) => {
			
		});
	});
}