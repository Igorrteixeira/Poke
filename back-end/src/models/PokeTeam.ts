import { CustomError } from "../helpers/apiErrors";

export class PokeTeam {
  constructor(
    private pokeTeam:NewPokeTeam
  ) {}

  getId() {
    return this.pokeTeam.id;
  }
  getPokeTeam() {
    return this.pokeTeam;
  }

  createPokeTeamBussines(poke:NewPokeTeam[],pokeTeam:NewPokeTeam[]){
    const { id,team_id,poke_id  } = this.pokeTeam;

    if (!poke_id ) {
      throw new CustomError(422,"Entre com pokemon !")
    }
    if (!team_id) {
      throw new CustomError(422,"Escolha um time para adicionar !")
    }
    if(poke.length === 1 ){
        throw new CustomError(403,"Pokemon Ja foi adicionado ao time")
    }
    if(pokeTeam.length === 6  ){
      throw new CustomError(403,"No maximo 6 pokemons por time")
    }


  }
}

export interface NewPokeTeam {
  id?: string;
  team_id: string;
  poke_id:string

}

