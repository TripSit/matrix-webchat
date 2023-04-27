import expressAsyncHandler from 'express-async-handler';

export const create_get = expressAsyncHandler(async(req, res):Promise<void> => {
	res.status(200).json({message: 'not implemented yet'});
});

export const create_post = expressAsyncHandler(async(req, res):Promise<void> => {
	const {username, triage, intro} = req.body;
	if(!username || !triage || !intro) {
		res.status(400).json({message: 'bad request'});
	}
});

// ...