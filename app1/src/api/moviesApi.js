
export const getMovies = async () => {
    const data = await fetch("http://localhost:8080/TimBurtonMovies/")
    const dataToJson = await data.json();
    return dataToJson;
}