
import { NewPokeTeam, PokeTeam } from "../models/PokeTeam";
import { DataBase } from "./DataBase";

export class PokeTeamData extends DataBase {
    public static TABLE_POKETEAM = 'Poke_Team_Db'

    create = async (pokeTeam: PokeTeam): Promise<string> => {
        await this.getConnection()
            .from(PokeTeamData.TABLE_POKETEAM)
            .insert(pokeTeam.getPokeTeam())
        return "Pokemon adicionado com sucesso"
    }

    getPoke = async (): Promise<NewPokeTeam[]> => {
        const response: NewPokeTeam[] = await this.getConnection()
            .from(PokeTeamData.TABLE_POKETEAM)
            .select()
        return response
    }

    getPokeById = async (poke_id: string, team_id: string): Promise<NewPokeTeam[]> => {
        const response: NewPokeTeam[] = await this.getConnection()
            .from(PokeTeamData.TABLE_POKETEAM)
            .select()
            .where({ poke_id })
            .andWhere({ team_id })
        return response
    }

    getPokeTeamById = async (team_id: string): Promise<NewPokeTeam[]> => {
        const response: NewPokeTeam[] = await this.getConnection()
            .from(PokeTeamData.TABLE_POKETEAM)
            .select()
            .where({ team_id })
        return response
    }

    delete = async (id: string): Promise<number> => {
        const response = await this.getConnection()
            .from(PokeTeamData.TABLE_POKETEAM)
            .delete()
            .where({ id })
        return response
    }
}