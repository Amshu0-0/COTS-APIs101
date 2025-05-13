const router = require("express").Router();
const {
	getAllMovies,
	getMovieById,
	createMovie,
	deleteMovieById,
	updateMovieById,
} = require("../controllers/movies_controller");

router.get("/:id", (req, res) => {
	const movieId = Number(req.params.id);
	const movie = getMovieById(movieId);
	res.json(movie);
});

router.post("/", (req, res) => {
	const newMovie = {
		name: req.body.name,
		genre: req.body.genre,
		img: req.body.img,
	};

	createMovie(newMovie);
	res.status(201).json(newMovie);
});

router.put("/:id", (req, res) => {
	movieId = Number(req.params.id);
	const updatedMovie = {
		id: movieId,
		name: req.body.name,
		genre: req.body.genre,
		img: req.body.img,
	};
	updateMovieById(movieId, updatedMovie);
	res.json(updatedMovie);
});

router.delete("/:id", (req, res) => {
	movieId = Number(req.params.id);
	res.json(deleteMovieById(movieId));
});

module.exports = router;