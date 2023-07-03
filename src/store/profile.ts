import { defineStore } from 'pinia'
import profileAPI from "@/apis/profile";

interface loginParams{
  username: string,
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id: 0 as number,
    isLoggedIn: false as boolean
  }),
  actions: {
    async verify() {
      const verifyRes: any = await profileAPI.verify()
      this.id = verifyRes.data.userDetails.userId;
      this.isLoggedIn = true;
    },
    async login(params: loginParams) {
      const loginRes: any = await profileAPI.login(params)
      this.id = loginRes.data.userDetails.userId;
      this.isLoggedIn = true;
      localStorage.setItem("jwtToken", loginRes.data.jwtToken);

      console.warn("logeed in");

      window.location.href = '/'
    }
  }
})
