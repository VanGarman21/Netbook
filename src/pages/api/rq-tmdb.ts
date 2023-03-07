export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "f9fa0e36ed741ff8a3ab01192e9d5c1c";

// export const getPopularMovies = async (page: number) => {
//   const response = await fetch(
//     `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
//   );
//   const data = await response.json();
//   return data;
// };

export const getPopularMovies = async (page: number, id?: number) => {
    const endpoint = id ? `movie/${id}` : 'movie/popular';
    const response = await fetch(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    return data;
  };
  