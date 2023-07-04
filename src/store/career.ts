import { defineStore } from 'pinia'
import careerAPI from "@/apis/career";

interface CareerGoal {
  "id": number,
  "userId": number,
  "name": string,
  "description": string,
  "category": string,
  "type": string,
  "progress": number
}

export const useCareerGoal = defineStore('careerGoal', {
  state: () => ({
    careerGoalData: [] as CareerGoal[]
  }),
  actions: {
    async getCareerGoal(){
      const careerRes: any = await careerAPI.getCareerGoal()
      this.careerGoalData = careerRes?.data
      console.warn("this.careerGoalData ", this.careerGoalData);
    }
  }
})
