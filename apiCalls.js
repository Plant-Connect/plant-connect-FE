const getData = () => {
	return fetch(
		'https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1'
	).then((response) => {
		return response.json()
	})
}

const postData = (listing) => {
	return fetch(
		'https://plant-connect-be.herokuapp.com/api/v1/listings?user_id=1',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				listing: listing,
			}),
		}
	).then((response) => response.json())
}

const handleSubmit = (newMessage) => {
	if (newMessage !== '') {
		fetch('https://plant-connect-be.herokuapp.com/api/v1/messages', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				listing_id: 1,
				user_id: 1,
				message: {
					user_id: 1,
					content: newMessage,
				},
			}),
		})
	}
}

const listings = getData()
export { listings, postData, getData, handleSubmit }
