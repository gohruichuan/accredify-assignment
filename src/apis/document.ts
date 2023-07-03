import axios from "axios";
import { getJWT } from '@/scripts/utils'

interface documentParams
{
  page: number,
  sortBy: string
}
const getDocuments = async(params: documentParams) =>{
  try{
    return await axios.get("http://localhost:4000/document-module/identities/1/documents", { headers: { Authorization: `Bearer ${getJWT()}` }, params: params
  })
  }
  catch(err){
    console.error(err)
  }
}
export default { getDocuments }
