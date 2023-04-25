import WebUsers from '../models/WebUsers';

export const login_get = async(req, res, next) => {
	//...
};

export const login_post = async(req, res, next) =>  {
	const user = new WebUsers(req.body.username);
};