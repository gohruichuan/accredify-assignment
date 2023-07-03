import axios from "axios";
import { getJWT } from '@/scripts/utils'

const getCareerGoal = async() =>{
  try{
    return await axios.get("http://localhost:4000/career-goals", { headers: { Authorization: `Bearer ${getJWT()}` }})
  }
  catch(err){
    console.error(err)
  }
}
export default { getCareerGoal }
