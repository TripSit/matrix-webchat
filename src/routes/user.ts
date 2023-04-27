import Router  from 'express';

const router = Router();

router.get('/', (req, res) => {
	if(req.cookies.username) {
		const username = req.cookies.usernam;
		res.status(200).json({message: 'Hello $'});
	}
});

export default router;