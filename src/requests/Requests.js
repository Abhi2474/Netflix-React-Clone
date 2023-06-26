const KEY = "b153cf4e9220f6712d51664621dbc0d3";

const requests = {
  requestPopular: `
	https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
  requestTopRated: `
	https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  requestUpcoming: `
	https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
  requestNowPlaying: `
	https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
  requestTrending: `
	https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&language=en-US&page=1`,
  requestGenre: `
	https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&page=1`,
};

export default requests;
