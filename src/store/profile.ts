import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    id: 0 as number,
    isLoggedIn: false as boolean
  }),
  actions: {
  }
})
