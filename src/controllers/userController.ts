/* eslint-disable @typescript-eslint/no-unused-vars */
import expressAsyncHandler from 'express-async-handler';
import WebUsers from '../models/webUsers';

// TODO: Use express async handler!
export const login_get = expressAsyncHandler(async (req, res): Promise<void> => {
	res.status(200);
});

export const login_post = expressAsyncHandler(async (req, res): Promise<void> => {
	const {username} = req.body;
	const regex = /^[a-zA-Z0-9](?!.*?[._]{2})[a-zA-Z0-9_.]+[a-zA-Z0-9]$/;
	let error = undefined;
	if(username.length < 5 || username.length > 20) {
		error = 'username must be between 5-20 characters';
	}
	if(!regex.test(username)) {
		error = 'Username can only contain letters, numbers, underscores (_), and periods (.), and cannot begin or end with an underscore or period. Consecutive underscores or periods are not allowed';
	}

	if(error !== undefined) {
		res.status(400).json({'error': true, message: error});
		return;
	}

	const user = new WebUsers(username);
	user.initialize();
});

