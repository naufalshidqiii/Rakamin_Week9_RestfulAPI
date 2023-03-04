const express = require("express");
const router = express.Router();
const pool = require("../config.js");

// GET All Movies List
router.get("/movies", (req, res, next) => {
	console.log("access movies");

	const getAllQuery = `
        SELECT
            *
        FROM movies
        ORDER BY id;
    `;

	pool.query(getAllQuery, (err, response) => {
		if (err) throw err;
		if (response.rows.length == 0) {
			next({ name: "ErrorNotFound" });
		} else res.status(200).json(response.rows);
	});
});

// GET Movie by ID
router.get("/movies/:id", (req, res, next) => {
	console.log("access a movie");
	const { id } = req.params;
	const getOneQuery = `
        SELECT
            *
        FROM movies
        WHERE movies.id = $1;
    `;

	pool.query(getOneQuery, [id], (err, response) => {
		if (err) throw err;
		if (response.rows.length == 0) {
			next({ name: "ErrorNotFound" });
		} else res.status(200).json(response.rows);
	});
});

// POST New Movie Entry
router.post("/movies", (req, res, next) => {
	console.log("create a movie entry");
	const { id, title, genre, year } = req.body;
	const postNewQuery = `
        INSERT INTO movies (id, title, genre, year)
            VALUES
                ($1, $2, $3, $4);
    `;

	pool.query(postNewQuery, [id], (err, response) => {
		if (err) throw err;
		if (response.rows.length == 0) {
			next({ name: "ErrorNotFound" });
		} else res.status(200).json(response.rows);
	});
});

module.exports = router;
