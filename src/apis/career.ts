import axios from "axios";
import { getJWT } from '@/scripts/utils'

const getCareerGoal = async() =>{
  try{
    return await axios.get("https://api-accredify-d799d4385f74.herokuapp.com/career-goals", { headers: { Authorization: `Bearer ${getJWT()}` }})
  }
  catch(err){
    console.error(err)
  }
}
export default { getCareerGoal }
