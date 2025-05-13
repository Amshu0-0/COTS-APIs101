const MOVIES = require("../data/MOVIES_STORE");

function getAllMovies() {
	return MOVIES;
}

function getMovieById(movieId) {
	const result = MOVIES.filter((movie) => movie.id == movieId);
	return result[0];
}

function createMovie(movie) {
	movie.id = MOVIES.length + 1;
	MOVIES.push(movie);
	return MOVIES[movie.id];
}

function updateMovieById(movieId, updatedMovie) {
	const index = MOVIES.findIndex(movie => movie.id === movieId);
	if (index > -1) {
		MOVIES[index] = updatedMovie;
		return updatedMovie;
	}

	throw new Error(`movie at id ${movieId} does not exist`);
}

function deleteMovieById(movieId) {
	const index = MOVIES.findIndex(movie => movie.id === movieId);

	if (index > -1 ) {
		return MOVIES.splice(index, 1)[0];
	}
	
	throw new Error(`movie at id ${movieId} does not exist`);
}

module.exports = {
	getAllMovies,
	getMovieById,
	createMovie,
	updateMovieById,
	deleteMovieById,
};