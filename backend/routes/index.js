import express from 'express';
import hotelRoutes from './hotel';

const router = express.Router();

router.get('/api-status', (req, res) => res.json({status: 'ok', msg: 'Api funcionando correctamente...'}));

router.use('/hotels', hotelRoutes);

export default router;