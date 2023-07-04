import { defineStore } from 'pinia'
import profileAPI from "@/apis/profile";

import { useDocumentStore } from "@/store/document";
import { useCareerGoal } from "@/store/career";

interface loginParams{
  username: string,
}

interface profileDetails{
  userId: number,
  username: string,
  name: string,
  isLoggedIn: boolean,
  isPersonal: boolean
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id: 0 as number,
    username: '' as string,
    name: '' as string,
    isLoggedIn: false as boolean,
    isPersonal: false as boolean
  }),
  actions: {
    async getProfileData(){
      const docStore = useDocumentStore()
      const careerGoal = useCareerGoal()

      const apiCalls = [docStore.getDocuments()]
      if(this.isPersonal) apiCalls.push(careerGoal.getCareerGoal())

      Promise.all(
        apiCalls
      )
    },
    setProfileDetails(res: profileDetails){
      this.id = res.userId;
      this.username = res.username;
      this.name = res.name;
      this.isLoggedIn = true;
      this.isPersonal = true
    },
    clearProfileDetails(){
      this.id = 0
      this.username = this.name = "";
      this.isLoggedIn = false;
      this.isPersonal = false;
      localStorage.removeItem("jwtToken");
    },
    async verify() {
      const verifyRes: any = await profileAPI.verify()
      this.setProfileDetails(verifyRes.data.userDetails)
      this.getProfileData()
    },
    async login(params: loginParams) {
      const loginRes: any = await profileAPI.login(params)
      this.setProfileDetails(loginRes.data.userDetails)
      localStorage.setItem("jwtToken", loginRes.data.jwtToken);
      this.getProfileData()

      window.location.href = '/'
    },
    logout(){
      this.clearProfileDetails()
      window.location.href = '/login'
    },
  }
})
