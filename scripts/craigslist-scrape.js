const axios = require('axios');
const cheerio = require('cheerio');

const craigslistScrape = () => {
	return axios.get("https://sfbay.craigslist.org/search/sof?query=")
}