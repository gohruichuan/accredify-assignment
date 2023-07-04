import axios from "axios";
import { getJWT } from '@/scripts/utils'

const login = async(params = {}) =>{
  try{
    return await axios.post("https://api-accredify-d799d4385f74.herokuapp.com/login", params)
  }
  catch(err){
    console.error(err)
  }
}

const verify = async() =>{
  try{
    return await axios.get("https://api-accredify-d799d4385f74.herokuapp.com/login/verify", { headers: { Authorization: `Bearer ${getJWT()}` }})
  }
  catch(err){
    console.error(err)
  }
}
export default { login, verify }
