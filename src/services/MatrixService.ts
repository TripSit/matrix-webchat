import axios from 'axios';
import { WebUser } from '../@types/WebUser';

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


/**
 * creates the room and invites the helperteam 
 * 
 * @param user 
 * @param triage 
 * @param intro 
 * @returns string roomId
 */
export async function createRoom(user:WebUser, triage:string, intro:string):Promise<string|undefined> {
	try {
		const response = await axios.post(`${process.env.TRIPBOT_API_BASEURL}/api/createTicket`, {
			user: user.username,
			triage: triage,
			intro: intro
		}, {
			headers: {
				secret: process.env.TRIPBOT_API_SECRET
			}
		});
		return response.data.roomId;
	} catch(e) {
		console.log(e);
	}

	export async function updateRoomName(newName:string):Promise<void>  {
		//... 
	}
	
} 