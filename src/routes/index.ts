import Router  from 'express';
import path from 'path';
import * as page_controller from '../controllers/pageController';

const router = Router();

router.set('views', path.join(__dirname, '/../views'));

router.get('/', async(req, res, next) => {
	await page_controller.index(req, res, next);
});

export default router;