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
    careerGoal: [] as CareerGoal[]
  }),
  actions: {
    async getCareerGoal(){
      const careerRes = await careerAPI.getCareerGoal()
      this.careerGoal = careerRes?.data
      console.warn("this.careerGoal ", this.careerGoal);
    }
  }
})
