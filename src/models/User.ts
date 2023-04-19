import {v4 as uuidv4} from 'uuid';
class User {
	id:string;
	username: string;
	password:string|null;
	createdAt:Date;
	updatedAt:Date;
	constructor(username:string) {
		this.id = uuidv4();
		this.username = username;
	}

	static async findByUsername(username:string):Promise<User | null> {
		return null;
	}

	async save():Promise<void> {
		// ...
	}
}
export {User};