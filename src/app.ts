import WebUsers from './models/webUsers';
import { databaseService } from './services/databaseService';
import * as dotenv from 'dotenv';
dotenv.config();
const db = new databaseService;



async function run() {
	console.log('testing app');
	let username = 'test';

	if(await db.getWebUserByUsername(username) !== undefined) {
		console.log(`User with name '${username} already exists in database. Appeding a '1' to the username.`);
		username = `${username}1`;
	}
	const user = new WebUsers(username);
	await user.save();
	const uData = await user.get();
	console.log(uData);
}

run();