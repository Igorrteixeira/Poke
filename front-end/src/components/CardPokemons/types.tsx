import bug from "../../Assets/icons-tipo/bug.png";
import grass from "../..//Assets/icons-tipo/grass.png";
import poison from "../../Assets/icons-tipo/poison.png";
import flying from "../../Assets/icons-tipo/flying.png";
import dragon from "../../Assets/icons-tipo/dragon.png";
import electric from "../../Assets/icons-tipo/electric.png";
import dark from "../../Assets/icons-tipo/dark.png";
import fairy from "../../Assets/icons-tipo/fairy.png";
import fighting from "../../Assets/icons-tipo/fighting.png";
import fire from "../../Assets/icons-tipo/fire.png";
import ghost from "../../Assets/icons-tipo/ghost.png";
import ground from "../../Assets/icons-tipo/ground.png";
import ice from "../../Assets/icons-tipo/bug.png";
import normal from "../../Assets/icons-tipo/normal.png";
import psychic from "../../Assets/icons-tipo/psychic.png";
import rock from "../../Assets/icons-tipo/rock.png";
import water from "../../Assets/icons-tipo/water.png";
import steel from "../../Assets/icons-tipo/steel.png";
import { TypeImage } from "./Style";


export const IconType = (type:string) => {
  switch (type) {
    case "grass":
      return <TypeImage src={grass} />;
    case "bug":
      return <TypeImage src={bug} />;
    case "poison":
      return <TypeImage src={poison} />;
    case "flying":
      return <TypeImage src={flying} />;
    case "dark":
      return <TypeImage src={dark} />;
    case "dragon":
      return <TypeImage src={dragon} />;
    case "electric":
      return <TypeImage src={electric} />;
    case "fairy":
      return <TypeImage src={fairy} />;
    case "fighting":
      return <TypeImage src={fighting} />;
    case "fire":
      return <TypeImage src={fire} />;
    case "ghost":
      return <TypeImage src={ghost} />;
    case "ground":
      return <TypeImage src={ground} />;
    case "ice":
      return <TypeImage src={ice} />;
    case "normal":
      return <TypeImage src={normal} />;
    case "psychic":
      return <TypeImage src={psychic} />;
    case "rock":
      return <TypeImage src={rock} />;
    case "steel":
      return <TypeImage src={steel} />;
    case "water":
      return <TypeImage src={water} />;
    default:
      <TypeImage src={normal} />;
  }
};
