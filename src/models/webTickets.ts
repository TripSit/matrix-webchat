/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { databaseService } from '../services/databaseService';
import { WebTicket } from '../@types/WebTicket';
import { matrixService } from '../services/matrixService';
export default class WebTickets {
	db: databaseService;
	matrix: matrixService;

	constructor() {
		this.db = new databaseService();
		this.matrix = new matrixService();
	}

	public async getById(id:string) {
		const roomData = await this.matrix.getRoom(id);
		console.log(roomData);
	}

	public async getUserTicketRoom(userID:string):Promise<string|undefined> {
		return (await this.db.getWebTicketByUuid(userID))?.matrix_roomId;
	}

	public async create(username:string, triage:string, intro:string):Promise  {
		const ticketData = {} as WebTicket;

		const user = await this.db.getWebUserByUsername(username);
		if(user === undefined) return false;
		ticketData.userId = user.id;
		const roomId = await this.matrix.createRoom(user, triage, intro);
		ticketData.matrix_roomId = roomId;
		this.db.createWebTicket(ticketData);

	}
    
}
