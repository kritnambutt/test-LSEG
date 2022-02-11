import express from 'express';
import Controller from '../controllers/index.js';

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
    res.status(200).send({ message: `welome to ${req.baseUrl}` })
});

router.get("/S1/Q1", Controller.getDataQ1);
router.get("/category", Controller.getCategory);
router.get("/S2/Q3", Controller.getDataS2Q3);

export default router;