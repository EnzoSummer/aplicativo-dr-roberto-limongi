import { Router } from 'express';
import adminController from '../controllers/AdminController';
// import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', adminController.index);
router.get('/:id', adminController.show);

router.post('/', adminController.store);

// O usuario logado pode se editar e se excluir
router.put('/:id', adminController.update);
router.delete('/:id', adminController.delete);

export default router;
