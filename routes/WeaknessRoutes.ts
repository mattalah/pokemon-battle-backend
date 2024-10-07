// routes/WeaknessRoutes.ts
import { Router, Request, Response } from 'express';
import WeaknessModel, { Weakness } from '../models/Weakness';

const router = Router();

// Get all weaknesses
router.get('/', async (req: Request, res: Response) => {
  try {
    const weaknesses: Weakness[] = await WeaknessModel.getAll();
    res.json(weaknesses);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

// Get weakness by ID
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const weakness: Weakness | null = await WeaknessModel.getById(Number(req.params.id));
    if (!weakness) {
      return res.status(404).send('Weakness not found');
    }
    res.json(weakness);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

export default router;
