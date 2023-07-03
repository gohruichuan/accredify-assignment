import axios from "axios";
import { useProfileStore } from "@/store/profile";

interface userDetails{
  userId: number,
  username: string
}

interface loginRes{
  data: {
    jwtToken: string,
    userDetails: userDetails
  }
}

const login = async(params = {}) =>{
  try{
    const profileStore = useProfileStore()
    const loginRes: loginRes = await axios.post("http://localhost:4000/login", params)
    profileStore.id = loginRes.data.userDetails.userId;
    profileStore.isLoggedIn = true;
    localStorage.setItem("jwtToken", loginRes.data.jwtToken);

    console.warn("profileStore ", profileStore);

    window.location.href = '/'
  }
  catch(err){
    console.error(err)
  }
}

export default { login }
