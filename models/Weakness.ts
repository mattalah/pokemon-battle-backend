import  supabase  from '../db';

export interface Weakness {
  id: number;
  type1: number; // Foreign key referencing Type
  type2: number; // Foreign key referencing Type
  factor: number; // Weakness multiplier
}

class WeaknessModel {
  static async getAll(): Promise<Weakness[]> {
    const { data, error } = await supabase
      .from('weakness')
      .select('*');

    if (error) throw new Error(error.message);
    return data as Weakness[];
  }

  static async getById(id: number): Promise<Weakness | null> {
    const { data, error } = await supabase
      .from('weakness')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data as Weakness | null;
  }
}

export default WeaknessModel;
