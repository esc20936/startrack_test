import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import HeroInterface from "@/interfaces/HeroInterface/HeroInterface";

export interface HeroesLists {
  likedHeroes: HeroInterface[];
  allHeroes: HeroInterface[];
}

interface setAllHeroesWithOutLikedPayload {
  allHeroes: HeroInterface[];
  idArrayOfLikedHeroes: string[];
}
const initialState: HeroesLists = {
  likedHeroes: [],
  allHeroes: [],
};

export const HeroesSlice = createSlice({
  name: "HeroesList",
  initialState,
  reducers: {
    addHeroToLikedList: (state, action: PayloadAction<HeroInterface>) => {
      let id = action.payload.id;
      state.likedHeroes.push(action.payload);

      //   add it to session storage
      //  get session storage
      let localStorageArray = localStorage.getItem("likedHeroes");
      let localStorageArrayParsed = JSON.parse(localStorageArray!);

      // push the id to the array
      localStorageArrayParsed.push(id);

      // set the new array to session storage
      localStorage.setItem(
        "likedHeroes",
        JSON.stringify(localStorageArrayParsed)
      );
      let allHeroesCopy = [...state.allHeroes];

      allHeroesCopy = allHeroesCopy.filter((hero: HeroInterface) => hero.id !== id);

      //   remove it from all heroes
      state.allHeroes = allHeroesCopy;
    },
    removeHeroFromLikedList: (state, action: PayloadAction<HeroInterface>) => {
      state.likedHeroes = state.likedHeroes.filter(
        (hero) => hero.id !== action.payload.id
      );

      //   remove it from session storage
      //  get session storage
      let localStorageArray = localStorage.getItem("likedHeroes");
      let localStorageArrayParsed = JSON.parse(localStorageArray!);

      // remove the id from the array
      localStorageArrayParsed = localStorageArrayParsed.filter(
        (id: string) => id !== action.payload.id
      );

      // set the new array to session storage
      localStorage.setItem(
        "likedHeroes",
        JSON.stringify(localStorageArrayParsed)
      );

      //   add it to all heroes
      state.allHeroes.push(action.payload);

      // sort all heroes by id
      state.allHeroes.sort((HeroA: HeroInterface, HeroB:HeroInterface) => HeroA.id - HeroB.id);
    },
    setAllHeroes: (state, action: PayloadAction<HeroInterface[]>) => {
      state.allHeroes = action.payload;
    },
    setAllHeroesWithOutLiked: (state, action: PayloadAction<setAllHeroesWithOutLikedPayload>) => {
      let { allHeroes, idArrayOfLikedHeroes } = action.payload;

      let allHeroesCopy = [...allHeroes];
      // filter all heroes by id
      allHeroes = allHeroes.filter(
        (hero: HeroInterface) => !idArrayOfLikedHeroes.includes(hero.id)
      );

      state.allHeroes = allHeroes;

      // filter liked heroes by id
      let likedHeroes: HeroInterface[] = [];
      for (let id of idArrayOfLikedHeroes) {
        let hero : HeroInterface = allHeroesCopy.find((hero: HeroInterface) => hero.id === id);
        likedHeroes.push(hero);
      }

      state.likedHeroes = likedHeroes;
    },
  },
});

export const {
  addHeroToLikedList,
  removeHeroFromLikedList,
  setAllHeroes,
  setAllHeroesWithOutLiked,
} = HeroesSlice.actions;

export default HeroesSlice.reducer;
