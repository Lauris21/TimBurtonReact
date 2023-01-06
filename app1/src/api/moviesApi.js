export const getMovies = async () => {
  const data = await fetch(
    "https://timburtonblog.onrender.com/TimBurtonMovies"
  );
  const dataToJson = await data.json();
  return dataToJson;
};
