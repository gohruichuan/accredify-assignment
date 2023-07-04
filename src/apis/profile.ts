import axios from "axios";
import { getJWT } from '@/scripts/utils'


const login = async(params = {}) =>{
  try{
    return await axios.post(`${import.meta.env.VITE_API_URL}/login`, params)
  }
  catch(err){
    console.error(err)
  }
}

const verify = async() =>{
  try{
    return await axios.get(`${import.meta.env.VITE_API_URL}/login/verify`, { headers: { Authorization: `Bearer ${getJWT()}` }})
  }
  catch(err){
    console.error(err)
  }
}
export default { login, verify }
