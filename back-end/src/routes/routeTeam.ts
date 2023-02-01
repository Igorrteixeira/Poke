import { Router } from "express";
import { TeamController } from "../controller/TeamController";
import { TeamData } from "../dataBase/TeamData";
import { VehiclesData } from "../dataBase/VehiclesData";
import { GenerateId } from "../helpers/GenerateId";

export const routeTeam = Router()

const teamController = new TeamController(
    new GenerateId(),
    new TeamData()
)

routeTeam.post("/create",teamController.create)
routeTeam.get("",teamController.getTeam)
routeTeam.get("/:id",teamController.getTeamById)
routeTeam.delete("/delete/:id",teamController.delete)