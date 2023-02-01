import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Team from '../pages/Team/Team'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/team' element={<Team/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router