/* eslint-disable @typescript-eslint/no-unused-vars */
import WebUsers from '../models/WebUsers';

// TODO: Use express async handler!
export const login_get = async(req, res, next) => {
	//...
};

export const login_post = async(req, res, next) =>  {
	const user = new WebUsers(req.body.username);
};