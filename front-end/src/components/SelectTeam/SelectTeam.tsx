import { BsFillArrowRightCircleFill } from "react-icons/bs";
import * as S from "./Style";

interface Team {
  id: string;
  name: string;
}

interface Props {
  team: Team[];
  button: () => void;
  setTeamId: React.Dispatch<React.SetStateAction<string>>;
}

const SelectTeam = (props: Props) => {
  return (
    <S.Container>
      <S.SelectTeam>
        <label htmlFor="team">Selecione um time</label>
        <select onChange={(e) => props.setTeamId(e.target.value)} id="team">
          <option value="">Times</option>
          {props.team.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </S.SelectTeam>

      <S.Button onClick={props.button}>
        Meus times
        <BsFillArrowRightCircleFill />
      </S.Button>
    </S.Container>
  );
};

export default SelectTeam;
