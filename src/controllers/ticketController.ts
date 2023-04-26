import expressAsyncHandler from 'express-async-handler';

export const create_get = expressAsyncHandler(async(req, res):Promise<void> => {
	res.send('n/a');
});

export const create_post = expressAsyncHandler(async(req, res):Promise<void> => {
	res.send('n/a');
});

// ...