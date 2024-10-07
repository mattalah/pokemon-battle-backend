import  supabase  from '../db';

export interface Team {
  id: number;
  name: string; // Name of the team
  pokemon_ids: number[]; // Array of Pokémon IDs
}

class TeamModel {
  static async getAll(): Promise<Team[]> {
    const { data, error } = await supabase
      .from('teams')
      .select('*');

    if (error) throw new Error(error.message);
    return data as Team[];
  }

  static async create(team: Partial<Team>): Promise<Team> {
    const { data, error } = await supabase
      .from('teams')
      .insert([team])
      .single();

    if (error) throw new Error(error.message);
    return data as Team;
  }
}

export default TeamModel;
