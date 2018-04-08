import express from 'express';
import hotelController from '../controllers/HotelController';

const router = express.Router();

router.route('/all').get(hotelController.get);

router.route('/').get(hotelController.getByFilter);
router.route('/').post(hotelController.save);
router.route('/:id').delete(hotelController.del);
router.route('/:id').put(hotelController.update);

export default router;