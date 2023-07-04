import axios from "axios";
import { getJWT } from '@/scripts/utils'

interface documentParams
{
  page: number,
  sortBy: string
}
const getDocuments = async(params: documentParams) =>{
  try{
    return await axios.get("https://api-accredify-d799d4385f74.herokuapp.com/document-module/identities/1/documents", { headers: { Authorization: `Bearer ${getJWT()}` }, params: params
  })
  }
  catch(err){
    console.error(err)
  }
}
export default { getDocuments }
