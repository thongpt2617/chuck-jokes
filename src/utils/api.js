const URL = "https://api.chucknorris.io/jokes";

const baseRequest = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    alert("Something went wrong!");
    return;
  }
  const resJson = await res.json();
  return resJson;
};

export const getRandomJokes = async () => {
  const url = `${URL}/random`;
  return baseRequest(url);
};

export const getCategories = async () => {
  const url = `${URL}/categories`;
  return baseRequest(url);
};

export const getAllJokes = async () => {
  const url = `${URL}/search?query=all`;
  return baseRequest(url);
};
