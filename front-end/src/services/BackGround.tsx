export const backgroundPoke = (type:string) => {
    switch (type) {
        case "grass":
          return "#729F92";
        case "bug":
          return "#76A866";
        case "poison":
          return "#AD61AE";
        case "flying":
          return "#6892B0";
        case "dark":
          return "#5C5365";
        case "dragon":
          return "#0A6CBF";
        case "electric":
          return "#F4D23B";
        case "fairy":
          return "#EC8FE6";
        case "fighting":
          return "#CE4069";
        case "fire":
          return "#EAAB7D";
        case "ghost":
          return "#5269AC";
        case "ground":
          return "#D97745";
        case "ice":
          return "#74CEC0";
        case "normal":
          return "#BF9762";
        case "psychic":
          return "#F67176";
        case "rock":
          return "#C7B78B";
        case "steel":
          return "#BBBBBB";
        case "water":
          return "#71C3FF";
      }
}

export const backgroundType = (type:string) => {
  switch (type) {
    case "grass":
      return "#70B873";
    case "bug":
      return "#316520";
    case "poison":
      return "#AD61AE";
    case "flying":
      return "#6892B0";
    case "dark":
      return "#5C5365";
    case "dragon":
      return "#0A6CBF";
    case "electric":
      return "#F4D23B";
    case "fairy":
      return "#EC8FE6";
    case "fighting":
      return "#CE4069";
    case "fire":
      return "#F44900";
    case "ghost":
      return "#5269AC";
    case "ground":
      return "#D97745";
    case "ice":
      return "#74CEC0";
    case "normal":
      return "#8A8A8A";
    case "psychic":
      return "#F67176";
    case "rock":
      return "#C7B78B";
    case "steel":
      return "#BBBBBB";
    case "water":
      return "#0A6CBF";
  }
}
