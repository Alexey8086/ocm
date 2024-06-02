import { defineStore } from 'pinia'
import { getCharactersByPage } from '#api/Characters.js'

export const useCharactersStore = defineStore('characters', {
  state: () => ({
    isLoading: false,
  }),
  
  getters: {

  },

  actions: {

    async fetchCharacters(page) {
      try {
        const data = await getCharactersByPage(page)
        return data
      } catch (error) {
        throw error
      }
    },

  },
});
