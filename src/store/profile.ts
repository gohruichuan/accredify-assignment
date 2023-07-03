import { defineStore } from 'pinia'
import profileAPI from "@/apis/profile";

interface loginParams{
  username: string,
}

interface profileDetails{
  userId: number,
  username: string,
  name: string,
  isLoggedIn: boolean
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id: 0 as number,
    username: '' as string,
    name: '' as string,
    isLoggedIn: false as boolean
  }),
  actions: {
    setProfileDetails(res: profileDetails){
      this.id = res.userId;
      this.username = res.username;
      this.name = res.name;
      this.isLoggedIn = true;
    },
    clearProfileDetails(){
      this.id = 0
      this.username = this.name = "";
      this.isLoggedIn = false;
      localStorage.removeItem("jwtToken");
    },
    async verify() {
      const verifyRes: any = await profileAPI.verify()
      this.setProfileDetails(verifyRes.data.userDetails)
    },
    async login(params: loginParams) {
      const loginRes: any = await profileAPI.login(params)
      this.setProfileDetails(loginRes.data.userDetails)
      localStorage.setItem("jwtToken", loginRes.data.jwtToken);
      window.location.href = '/'
    },
    logout(){
      this.clearProfileDetails()
    }
  }
})
