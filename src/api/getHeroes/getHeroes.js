import axios from "axios";

const getHeroes = async () => {
  try {
    const response = await axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .catch((error) => {
        return Promise.reject(error);
      });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getHeroes;
