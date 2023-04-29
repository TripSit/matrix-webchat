import expressAsyncHandler from 'express-async-handler';

export const index = expressAsyncHandler(async(req, res):Promise<void> => {
	res.render('index', {title: 'index', });
});