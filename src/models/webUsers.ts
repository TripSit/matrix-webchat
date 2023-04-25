import {v4 as uuidv4} from 'uuid';
import { DatabaseService } from '../services/databaseService';
import { WebUser } from '../@types/WebUser';
export default class WebUsers {
	id: string|undefined;
	username: string|undefined;
	db: DatabaseService;

	constructor(username?:string) {
		if(username) {
			this.id = uuidv4();
		}
		this.username = username;
		this.db = new DatabaseService();

	}
	public async get():Promise<WebUser | undefined> {
		return await this.db.getWebUser(this.id);
	}

	/**
	 * 
	 * @param {string} username 
	 * @returns {Promise<WebUser|undefined>} WebUser / Undefined
	 */
	public async findByUsername(username:string):Promise<WebUser | undefined> {
		return this.db.getWebUserByUsername(username);
	}
	/**
	 * Save the current user to the database
	 */
	async save():Promise<void> {
		await this.db.createWebUser(this.id, this.username);
	}
}
