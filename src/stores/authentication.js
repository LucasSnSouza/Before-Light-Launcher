import { defineStore } from 'pinia';
import { HttpRequest } from '@/utils/http';

export const useAuthentication = defineStore('authentication', {
  state: () => ({
    SinginData: null,
  }),
  actions: {
    async fetchSingin(payload){
      const response = await HttpRequest('http://129.148.39.117:5171/login', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      this.SinginData = response;
    },
    fetchSingup(payload){
      fetch('http://129.148.39.117:5171/register', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
    }
  },
  getters: {
    GetSinginData: (state) => state.SinginData,
  },
});