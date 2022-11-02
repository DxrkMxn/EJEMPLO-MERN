const express = require("express");
const router = express.Router();

// Albums model
const Albums = require("../models/albums");

// @route   GET /api/albums/
// @desc    Get all albums
// @access  Public
router.get("/", async (req, res) => {
  try {
    const albums = await Albums.find({});
    res.send({ albums });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/albums/:id
// @desc    Get a specific album
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const album = await Albums.findById(req.params.id);
    res.send({ album });
  } catch (err) {
    res.status(404).send({ message: "Álbum no encontrado!" });
  }
});

// @route   POST /api/albums/
// @desc    Create a album
// @access  Public
router.post("/", async (req, res) => {
  try {
    const newAlbum = await Albums.create({
      nombre: req.body.nombre,
      artista: req.body.artista,
      genero: req.body.genero,
      year: req.body.year,
    });
    res.send({ newAlbum });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/albums/:id
// @desc    Update a album
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const updatedAlbum = await Albums.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "El álbum fue actualizado" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/albums/:id
// @desc    Delete a album
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const removeAlbum = await Albums.findByIdAndRemove(req.params.id);
    res.send({ message: "El álbum fue eliminado" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
