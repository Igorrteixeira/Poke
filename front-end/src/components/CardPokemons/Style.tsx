import styled from "styled-components";
import { backgroundPoke, backgroundType } from "../../services/BackGround";
interface Props {
    background:string
}
export const ContainerCard = styled.div<Props>`
    color: white;
    margin: 30px auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 280px;
    height: 150px;
    background-color: ${(props) => backgroundPoke(props.background)}
        
`;

export const ContImg = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`

export const ImgPoke = styled.img`
  position: absolute;
  padding-bottom: 10px;
  width: 170px;
  height: 140px;
`;

export const Details = styled.button`
  color: white;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid;
`;

export const TypeImage = styled.img`
  width: 8px;
  height: 12px;
`;

export const TitleType = styled.p<Props>`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px 10px 5px 6px;
  gap: 3px;
  border-radius: 10px;
  width: 50px;
  text-align: center;
  background-color: ${(props) => backgroundType(props.background)}
  `

  export const BackImg  = styled.img`
  width: 140px;
  height: 120px;
`;

export const ContItens = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const AddButton = styled.button`
    display: flex;
    width: 100px;
    position: absolute;
    bottom: 5px;
    left: 30px;
    align-items: center;
    gap: 8px;
    background: #757577;
    border: none;
    color: white;
    padding: 8px;
    border-radius: 5px;

`
