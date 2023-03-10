import { ref } from 'vue';
import { defineStore } from 'pinia';

/** entities */
import menuCards from '../entities/menuCards';

export const useHomeStore = defineStore('home', () => {
  const cards = ref(menuCards());

  return {
    cards,
  };
});
