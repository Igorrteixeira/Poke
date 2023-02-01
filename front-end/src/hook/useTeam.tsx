import axios from 'axios'
import React, { useState } from 'react'
import { URL_TEAM } from '../constants/URL_TEAM'

interface Team {
    id:string,
    name:string
}

const useTeam = () => {
    const [team,setTeam] = useState<Team[]>([])

    const getTeam = () => {
        axios
        .get(`${URL_TEAM}team`)
        .then(res => setTeam(res.data.resposne))
        .catch(error => alert(error.message))
    }

    const createTeam = (name:string) => {
        const body = {name,}  
        axios
        .post(`${URL_TEAM}team/create`,body)
        .then(res => alert(res.data.response)) 
        .catch(error => alert(error.message))
    }
    return {getTeam,team,createTeam}
}

export default useTeam