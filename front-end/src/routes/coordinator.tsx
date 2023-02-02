import { NavigateFunction } from "react-router-dom"

export const  goToHome  = (navigate:NavigateFunction) => {
    navigate('/')
}

export const  goToTeam  = (navigate:NavigateFunction) => {
    navigate('/team')
}