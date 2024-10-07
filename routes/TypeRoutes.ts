import { Router, Request, Response } from 'express';
import TypeModel, { Type } from '../models/Type';

const router = Router();

// Get all types
router.get('/', async (req: Request, res: Response) => {
  try {
    const types: Type[] = await TypeModel.getAll();
    res.json(types);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

// Get type by ID
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const type: Type | null = await TypeModel.getById(Number(req.params.id));
    if (!type) {
      return res.status(404).send('Type not found');
    }
    res.json(type);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

export default router;
