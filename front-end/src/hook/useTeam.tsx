import axios from 'axios'
import React, { useState } from 'react'
import { URL_TEAM } from '../constants/URL_TEAM'

interface Team {
    id:string,
    name:string
}



const useTeam = () => {
    const [team,setTeam] = useState<Team[]>([])

    const getTeam = (url:string) => {
        axios
        .get(`${URL_TEAM}${url}`)
        .then(res => setTeam(res.data.resposne
            ))
        .catch(error => alert("Erro no servidor"))
    }

    return {getTeam,team}
}

export default useTeam