import  supabase  from '../db';

export interface Type {
  id: number;
  name: string; // e.g., Fire, Water, Grass
}

class TypeModel {
  static async getAll(): Promise<Type[]> {
    const { data, error } = await supabase
      .from('pokemon_type')
      .select('*');

    if (error) throw new Error(error.message);
    return data as Type[];
  }

  static async getById(id: number): Promise<Type | null> {
    const { data, error } = await supabase
      .from('pokemon_type')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data as Type | null;
  }
}

export default TypeModel;
