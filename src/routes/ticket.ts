import Router  from 'express';
import * as ticket_controller from '../controllers/ticketController';

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json({message: 'Hello from the ticket_router'});
});

router.get('/new', ticket_controller.create_get);

router.post('/newe', ticket_controller.create_post);   

export default router;