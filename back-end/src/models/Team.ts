import { CustomError } from "../helpers/apiErrors";

export class Team {
  constructor(private team: NewTeam) {}

  getId() {
    return this.team.id;
  }
  getTeam() {
    return this.team;
  }

  createTeamBussines() {
    const {name} = this.team;

    if (!name || name.length < 3) {
      throw new CustomError(422,"Digite um nome para o time com no minimo 3 caracteries");
    }
  };
}

export interface NewTeam {
  id?: string;
  name: string;
}

