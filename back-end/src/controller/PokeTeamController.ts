import { Request, Response } from "express";
import { PokeTeamData } from "../dataBase/PokeTeamData";
import { TeamData } from "../dataBase/TeamData";
import { GenerateId } from "../helpers/GenerateId";
import { NewPokeTeam, PokeTeam } from "../models/PokeTeam";

export class PokeTeamController {
    constructor(
        private generateId: GenerateId,
        private pokeTeamData: PokeTeamData,
        private teamData: TeamData
    ) { }

    create = async (req: Request, res: Response) => {
        const input: NewPokeTeam = {
            id: this.generateId.generateId(),
            team_id: req.body.team_id,
            poke_id: req.body.poke_id,
        }

        const poke = await this.pokeTeamData.getPokeById(input.poke_id, input.team_id)
        const pokeTeam = await this.pokeTeamData.getPokeTeamById(input.team_id)

        const newPokeTeam = new PokeTeam(input)
        newPokeTeam.createPokeTeamBussines(poke, pokeTeam)
        const response = await this.pokeTeamData.create(newPokeTeam)

        res.status(200).send({ response: response })
    }

    getPoke = async (req: Request, res: Response) => {
        const response = await this.pokeTeamData.getPoke()

        res.status(200).send({ resposne: response })
    }

    delete = async (req: Request, res: Response) => {
        const id = req.params.id
        const response = await this.pokeTeamData.delete(id)
        const message = !id || !response ? "Digite um id Valido " : "Deletado com sucesso"

        res.status(200).send({ response: message })
    }
}