// routes/PokemonRoutes.ts
import { Router, Request, Response } from 'express';
import PokemonModel, { Pokemon } from '../models/Pokemon';

const router = Router();

// Get all Pokémon
router.get('/', async (req: Request, res: Response) => {
  try {
    const pokemons: Pokemon[] = await PokemonModel.getAll();
    res.json(pokemons);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

// Get Pokémon by ID
router.get('/:id', async (req: Request, res: Response): Promise<any> => {
  try {
    const pokemon: Pokemon | null = await PokemonModel.getById(Number(req.params.id));
    if (!pokemon) {
      return res.status(404).send('Pokémon not found');
    }
    res.json(pokemon);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

// Update Pokémon
router.put('/:id', async (req: Request, res: Response) => {
  try {
    await PokemonModel.update({ ...req.body, id: Number(req.params.id) });
    res.sendStatus(204);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

// Create a new Pokémon
router.post('/', async (req: Request, res: Response) => {
  try {
    const newPokemon: Pokemon = await PokemonModel.create(req.body);
    res.status(201).json(newPokemon);
  } catch (error : any) {
    res.status(500).send(error.message);
  }
});

export default router;
