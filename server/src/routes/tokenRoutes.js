import { Router } from 'express';
import tokenController from '../controllers/TokenController'; // Class ja instanciada

const router = new Router();

router.post('/', tokenController.store);

export default router;
