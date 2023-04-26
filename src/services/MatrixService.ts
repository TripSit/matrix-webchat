import axios from 'axios';
import { WebUser } from '../@types/WebUser';


export class matrixService {

	public async getRoom(roomId:string) {
		const baseUrl = `${process.env.MATRIX_HOMESERVER_URL}/_matrix/client/r0`;
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
	public async createRoom(user:WebUser, triage:string, intro:string):Promise<string|undefined> {
		try {
			const response = await axios.post(`${process.env.TRIPBOT_API_BASEURL}/api/createTicket`, {
				user: user,
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
	}

	public async updateRoomName(newName:string):Promise<void>  {
		//... --
	}
	
} 


