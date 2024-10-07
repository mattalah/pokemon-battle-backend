import  supabase  from '../db';

export interface Pokemon {
  id: number;
  name: string;
  type: number; // Foreign key referencing Type
  image: string;
  power: number; // 10 to 100
  life: number; // 10 to 100
}

class PokemonModel {
  static async getAll(): Promise<Pokemon[]> {
    const { data, error } = await supabase
      .from('pokemon')
      .select('*');

    if (error) throw new Error(error.message);
    return data as Pokemon[];
  }

  static async getById(id: number): Promise<Pokemon | null> {
    const { data, error } = await supabase
      .from('pokemon')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data as Pokemon | null;
  }

  static async create(pokemon: Partial<Pokemon>): Promise<Pokemon> {
    const { data, error } = await supabase
      .from('pokemon')
      .insert([pokemon])
      .single();

    if (error) throw new Error(error.message);
    return data as Pokemon;
  }

  static async update(pokemon: Pokemon): Promise<void> {
    const { error } = await supabase
      .from('pokemon')
      .update(pokemon)
      .eq('id', pokemon.id);

    if (error) throw new Error(error.message);
  }
}

export default PokemonModel;
