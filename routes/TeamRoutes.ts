// routes/TeamRoutes.ts
import { Router, Request, Response } from 'express';
import TeamModel, { Team } from '../models/Team';

const router = Router();

// Get all teams
router.get('/', async (req: Request, res: Response) => {
  try {
    const teams: Team[] = await TeamModel.getAll();
    res.json(teams);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

// Create a new team
router.post('/', async (req: Request, res: Response) => {
  try {
    const newTeam: Team = await TeamModel.create(req.body);
    res.status(201).json(newTeam);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

export default router;
