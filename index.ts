import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import PokemonRoutes from './routes/PokemonRoutes'; 
import TypeRoutes from './routes/TypeRoutes'; 
import WeaknessRoutes from './routes/WeaknessRoutes'; 
import TeamRoutes from './routes/TeamRoutes'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.use('/api/pokemons', PokemonRoutes);
app.use('/api/types', TypeRoutes);
app.use('/api/weaknesses', WeaknessRoutes);
app.use('/api/teams', TeamRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
