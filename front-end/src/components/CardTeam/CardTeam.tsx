import { useEffect } from "react";
import usePokemon from "../../hook/usePokemon";
import { TiDeleteOutline } from "react-icons/ti";

import * as S from "./Style";

interface Props {
  pokeId: string;
  delete: () => void;
}
const CardTeam = (props: Props) => {
  console.log(props);
  const { getPokeById, pokeDetails } = usePokemon();

  useEffect(() => {
    getPokeById(props.pokeId);
  }, [props.pokeId]);

  return (
    <S.Container>
      <S.ContImg>
        <S.Id># {pokeDetails.order}</S.Id>
        <S.Img src={pokeDetails.img} alt={`Imagem pokemon ${props.pokeId}`} />
      </S.ContImg>
      <S.Name>{props.pokeId.toUpperCase()}</S.Name>
      <S.Delete onClick={props.delete}>
        <TiDeleteOutline size={"20px"} />
      </S.Delete>
    </S.Container>
  );
};

export default CardTeam;
