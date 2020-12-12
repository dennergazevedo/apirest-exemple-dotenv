import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send({
      title: 'InputOnAPI',
      version: process.env.API_VERSION,
    });
  });

export default router;