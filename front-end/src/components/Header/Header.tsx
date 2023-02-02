import logo from '../../assets/logo.png'
import * as S from "./Style"

const Header = () => {
  return (
    <S.Container>
      <S.ContImg><img src={logo} alt="" /></S.ContImg>
    </S.Container>
  )
}

export default Header