import axios from 'axios';

const baseUrl = `${process.env.MATRIX_HOMESERVER_URL}/_matrix/client/r0`;

export async function getRoom(roomId:string) {
	const url = `${baseUrl}/rooms/${roomId}?access_token=${process.env.MATRIX_ACCESS_TOKEN}`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch(error) {
		console.log(error);
	}
}