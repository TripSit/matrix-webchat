import {v4 as uuidv4} from 'uuid';
import { DatabaseService } from '../services/databaseService';
import { WebUser } from '../@types/WebUser';
export default class WebUsers {
	id: string;
	username: string;
	db: DatabaseService;

	constructor(username:string) {
		this.id = uuidv4();
		this.username = username;
		this.db = new DatabaseService();

	}
	public async get():Promise<WebUser | undefined> {
		return await this.db.getWebUser(this.id);
	}
	public async findByUsername(username:string):Promise<WebUser | null> {
		return null;
	}
	async save():Promise<void> {
		await this.db.createWebUser(this.id, this.username);
	}
}
