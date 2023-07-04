import axios from "axios";
import { getJWT } from '@/scripts/utils'

const getCareerGoal = async() =>{
  try{
    return await axios.get(`${import.meta.env.VITE_API_URL}/career-goals`, { headers: { Authorization: `Bearer ${getJWT()}` }})
  }
  catch(err){
    console.error(err)
  }
}
export default { getCareerGoal }
