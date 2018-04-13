import React, { Component } from 'react';

class Craigslist extends Component {
	state = {
		jobs: []
	};

	componentDidMount() {

	}

	render() {
		return (
			<div className='card'>
  				<div className='card-body'>
					<input type='checkbox' className='form-check-label' />
					<label className='form-check-label'>Full Time</label>

					<input type='checkbox' className='form-check-label' />
					<label className='form-check-label'>Part Time</label>

					<input type='checkbox' className='form-check-label' />
					<label className='form-check-label'>Contract</label>

					<input type='text' placeholder='Miles from Zip' />
					<input type='text' placeholder='Zip Code' />
  				</div>
			</div>
		)
	}
}

export default Craigslist;