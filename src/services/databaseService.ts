import {Knex,knex} from 'knex';
import { WebUser } from '../@types/WebUser';
import { WebTicket } from '../@types/WebTicket';
export class DatabaseService {
	private db:Knex;

	constructor() {
		this.db = knex({
			client: 'pg',
			connection: {
				host: process.env.DB_HOST,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_DATABASE,
			}
		});
	}


	/**
	 * Get all Webchat-users
	 * 
	 * @returns WebUser[] | undefined
	 */
	public async getAllWebUsers():Promise<WebUser[] | undefined> {
		try {
			return await this.db<WebUser>('web_users')
				.select('*')
				.returning('*');
		} catch (e) {
			console.log(e);
		}
	}

	/**
	 * Get a Webchat-User by their username
	 * 
	 * @param username 
	 * @returns WebUser | undefined
	 */
	public async getWebUserByUsername(username:string):Promise<WebUser | undefined> {
		let data = {} as WebUser | undefined;
		try {
			data = await this.db<WebUser>('web_users')
				.select('*')
				.where('username', username)
				.first();
		} catch (e) {
			console.log(e);
		}
		return data;        
	}

	/**
	 * Get a webchat-user by their UUID
	 * 
	 * @param uuid
	 * @returns WebUser | undefined
	 */
	public async getWebUser(uuid:string):Promise<WebUser | undefined> {
		let data = {} as WebUser | undefined;
		try {
			data = await this.db<WebUser>('web_users')
				.select('*')
				.where('id', uuid)
				.first();
		} catch (e) {
			console.log(e);
		}
		return data;            
	}

	/**
	 * Create a new webchat user in the database
	 * 
	 * @param uuid UUIDv4
	 * @param username 
	 * @returns WebUser | undefined
	 */
	public async createWebUser(uuid:string, username: string):Promise<WebUser | undefined> {
		let data = {} as WebUser | undefined;
		try {
			[data] = (await this.db<WebUser>('web_users')
				.insert({id: uuid, username: username})
				.returning('*'));
		} catch(e) {
			console.log(e);
		}
		return data as WebUser;
	}

	/**
	 * Delete a webchat-user
	 * 
	 * @param uuid 
	 */
	public async deleteWebUser(uuid:string):Promise<void> {
		try {
			await this.db<WebUser>('web_users')
				.del()
				.where('id', uuid);
		} catch(e) {
			console.log(e);
		}
	}

	/**
	 * Store a new web ticket to the database
	 * 
	 * @param ticketData 
	 * @returns WebTicket
	 */
	public async createWebTicket(ticketData:WebTicket):Promise<WebTicket> {
		let data = {} as WebTicket;
		try {
			[data] = await this.db<WebTicket>('web_tickets')
				.insert(ticketData)
				.returning('*');
		} catch(e) {
			console.log(e);
		}
		return data;
	}

	/**
	 * Get a web ticket
	 * 
	 * @param id 
	 * @returns WebTicket | undefined 
	 */
	public async getWebTicket(id:string):Promise<WebTicket | undefined>{
		try {
			return await this.db<WebTicket>('web_tickets')
				.select('*')
				.where('id', id)
				.first();
		} catch (e) {
			console.log(e);
		}
	}

	public async getWebTicketByUuid(uuid:string):Promise<WebTicket | undefined> {
		try {
			return await this.db<WebTicket>('web_tickets')
				.select('*')
				.where('userId', uuid)
				.first();
		} catch (e) {
			console.log(e);
		}
	}

	/**
	 * Delete a web ticket
	 * 
	 * @param id 
	 */
	public async deleteWebTicket(id:string):Promise<void> {
		try {
			await this.db<WebTicket>('web_tickets')
				.del()
				.where('id', id);
		} catch (e) {
			console.log(e);
		}
	}

	
}