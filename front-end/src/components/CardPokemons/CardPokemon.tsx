import React, { useEffect } from 'react'
import usePokemon from '../../hook/usePokemon'
import backImg from "../../Assets/fundo-pok.png";
import * as S from './Style'
import { IconType } from './types';

interface Props {
  name:string
  add:()=>void
}


const CardPokemon = (props:Props) => {
  const {name} = props
  const {getPokes,getPokeById,pokeDetails} = usePokemon()
    useEffect(()=>{getPokeById(name)},[name])

    const {type,order} = pokeDetails
  return (
    <S.ContainerCard background={type}>
      <S.ContItens>
        <div>
          <h4># {order}</h4>
          <h3>{name.toUpperCase()}</h3>
          <S.TitleType background={type}>
            <IconType img={type} /> {type}
          </S.TitleType>
        </div>

        <S.ContImg>
        <S.ImgPoke src={pokeDetails.img} alt="" />
        <S.BackImg src={backImg} alt="" />
      </S.ContImg>
      </S.ContItens>
      <button onClick={props.add}>Adicionar</button>
  
    </S.ContainerCard>
  )
}

export default CardPokemon