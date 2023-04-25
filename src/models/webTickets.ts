/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { getRoom } from '../services/matrixService';
import { DatabaseService } from '../services/databaseService';
export default class WebTickets {
	db: DatabaseService;

	constructor() {
		this.db = new DatabaseService();
	}

	public async getById(id:string) {
		const roomData = await getRoom(id);
		console.log(roomData);
	}

	public async getUserTicketRoom(userID:string):Promise<string|undefined> {
		return (await this.db.getWebTicketByUuid(userID))?.matrix_roomId;
	}

	public static async create(username:string)  {
		// ...
	}
    
}
