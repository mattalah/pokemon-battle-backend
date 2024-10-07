import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import supabase from './db'; 
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.use('/api/pokemons', require('./routes/PokemonRoutes'));
app.use('/api/types', require('./routes/TypeRoutes'));
app.use('/api/weaknesses', require('./routes/WeaknessRoutes'));
app.use('/api/teams', require('./routes/TeamRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
