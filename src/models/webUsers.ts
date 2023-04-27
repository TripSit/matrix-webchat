import {v4 as uuidv4} from 'uuid';
import { databaseService } from '../services/databaseService';
import { WebUser } from '../@types/WebUser';
export default class WebUsers {
	id: string|undefined;
	username: string|undefined;
	db: databaseService;

	constructor(username?:string) {
		this.username = username;
		this.db = new databaseService();

	}

	public async initialize():Promise<void> {
		if(await this.findByUsername(this.username as string) !== undefined) {
			this.id = (await this.findByUsername(this.username as string))?.id;
		} else {
			this.id = uuidv4();
			this.save();
		}
	}

	public async get():Promise<WebUser | undefined> {
		return await this.db.getWebUser(this.id as string);
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
		if(this.id === undefined || this.username === undefined) {
			console.log('failed to save user. There is noone logged in.');
			return;
		}
		await this.db.createWebUser(this.id, this.username);
	}
}
