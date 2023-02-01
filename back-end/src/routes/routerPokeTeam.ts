import { Router } from "express";
import { PokeTeamController } from "../controller/PokeTeamController";
import { PokeTeamData } from "../dataBase/PokeTeamData";
import { TeamData } from "../dataBase/TeamData";
import { GenerateId } from "../helpers/GenerateId";

export const routePokeTeam = Router()

const pokeTeamController = new PokeTeamController(
    new GenerateId(),
    new PokeTeamData(),
    new TeamData()
)

routePokeTeam.post("/create",pokeTeamController.create)
routePokeTeam.get("",pokeTeamController.getPoke)
// routePokeTeam.get("/:id",pokeTeamController)
routePokeTeam.delete("/delete/:id",pokeTeamController.delete)