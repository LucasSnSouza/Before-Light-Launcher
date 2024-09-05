import { defineStore } from 'pinia';

export const useAuthentication = defineStore('authentication', {
  state: () => ({
    singin: null,
  }),
  actions: {
    fetchSingin(payload){
      fetch('http://localhost:5172/login', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).then(data => {
        console.log(data);
      })
    },
    fetchSingup(payload){
      fetch('http://localhost:5172/register', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
    }
  },
  getters: {
  },
});