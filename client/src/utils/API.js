import axios from 'axios';

export default {
	// Saves job posting to database
	saveJob: function(jobPost) {
		return axios.post('/api/savejob', jobPost);
	}
};