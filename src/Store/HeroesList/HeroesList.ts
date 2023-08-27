import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HeroesLists {
  likedHeroes: any[];
  allHeroes: any[];
}

const initialState: HeroesLists = {
  likedHeroes: [],
  allHeroes: [],
};

export const HeroesSlice = createSlice({
  name: "HeroesList",
  initialState,
  reducers: {
    addHeroToLikedList: (state, action: PayloadAction<any>) => {
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

      //   remove it from all heroes
      state.allHeroes = state.allHeroes.filter(
        (hero) => hero.id !== id
      );
    },
    removeHeroFromLikedList: (state, action: PayloadAction<any>) => {
      state.likedHeroes = state.likedHeroes.filter(
        (hero) => hero.id !== action.payload.id
      );

        //   remove it from session storage
        //  get session storage
        let localStorageArray = localStorage.getItem("likedHeroes");
        let localStorageArrayParsed = JSON.parse(localStorageArray!);

        // remove the id from the array
        localStorageArrayParsed = localStorageArrayParsed.filter(
            (id: number) => id !== action.payload.id
        );

        // set the new array to session storage
        localStorage.setItem(
            "likedHeroes",
            JSON.stringify(localStorageArrayParsed)
        );


        //   add it to all heroes
        state.allHeroes.push(action.payload);

        // sort all heroes by id
        state.allHeroes.sort((a, b) => a.id - b.id);

    },
    setAllHeroes: (state, action: PayloadAction<any>) => {
      state.allHeroes = action.payload;
    },
    setAllHeroesWithOutLiked: (state, action: PayloadAction<any>) => {
        let { allHeroes, idArrayOfLikedHeroes } = action.payload;
        
        let allHeroesCopy = [...allHeroes];
        // filter all heroes by id
        allHeroes = allHeroes.filter((hero: any) => !idArrayOfLikedHeroes.includes(hero.id))

        state.allHeroes = allHeroes;

        // filter liked heroes by id
        let likedHeroes = [];
        for (let id of idArrayOfLikedHeroes) {
            let hero = allHeroesCopy.find((hero: any) => hero.id === id);
            likedHeroes.push(hero);
        }

        state.likedHeroes = likedHeroes;

    },
  },
});

export const { addHeroToLikedList, removeHeroFromLikedList, setAllHeroes, setAllHeroesWithOutLiked} =
  HeroesSlice.actions;

export default HeroesSlice.reducer;
