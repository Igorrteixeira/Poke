import { NewTeam, Team } from "../models/Team";
import { DataBase } from "./DataBase";

export class TeamData extends DataBase {

    public static TABLE_TEAM = 'Team_Db'

    create = async (team: Team): Promise<string> => {
        await this.getConnection()
            .from(TeamData.TABLE_TEAM)
            .insert(team.getTeam())
        return "Time criado com sucesso"
    }

    getTeam = async (): Promise<NewTeam[]> => {
        const response: NewTeam[] = await this.getConnection()
            .from(TeamData.TABLE_TEAM)
            .select()
        return response
    }

    getTeamById = async (id: string): Promise<NewTeam[]> => {
        const response: NewTeam[] = await this.getConnection()
            .from(TeamData.TABLE_TEAM)
            .select()
            .where({ id })
        return response
    }

    delete = async (id: string): Promise<number> => {
        const response = await this.getConnection()
            .from(TeamData.TABLE_TEAM)
            .delete()
            .where({ id })
        return response
    }

}