/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { getRoom } from '../services/matrixService';
export default class WebTickets {


	public static async getById(id:string) {
		const roomData = await getRoom(id);
		console.log(roomData);
	}

	public static async getUserTickets(userID:string) {
	}

	public static async create(username:string)  {
		
	}
    
}
