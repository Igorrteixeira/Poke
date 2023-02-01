import { Request, Response } from "express";
import { TeamData } from "../dataBase/TeamData";
import { GenerateId } from "../helpers/GenerateId";
import { NewTeam, Team } from "../models/Team";

export class TeamController {
    constructor(
        private generateId: GenerateId,
        private teamData: TeamData
    ) { }

    create = async (req: Request, res: Response) => {
        const input: NewTeam = {
            id: this.generateId.generateId(),
            name: req.body.name,
        }
        const newTeam = new Team(input)
        newTeam.createTeamBussines()
        const response = await this.teamData.create(newTeam)
        res.status(200).send({ response: response })
    }

    getTeam = async (req: Request, res: Response) => {
        const response = await this.teamData.getTeam()
        res.status(200).send({ resposne: response })
    }

    getTeamById = async (req: Request, res: Response) => {
        const id = req.params.id
        const response = await this.teamData.getTeam()
        res.status(200).send({ resposne: response })
    }

    delete = async (req: Request, res: Response) => {
        const id = req.params.id
        const response = await this.teamData.delete(id)
        const message = !id || !response ? "Digite um id Valido " : "Deletado com sucesso"
        res.status(200).send({ response: message })
    }
}