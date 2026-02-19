import express from "express";
import * as path from "path";
import { europeArray } from "../data/data.js";


const europeRoutes =express.Router();
const __dirname = path.resolve();

europeRoutes.get("/", (req,res) => {
  res.render("pages/region", {
    docTitle: "Eurasia | Europe",
    info:europeArray.europe,
    countries:europeArray.europe.countries,
    currentRegion: "europe"
  })
})

europeRoutes.get("/:id", (req,res) => {
  const { id } = req.params;

  const selectedCountry = europeArray.europe.countries.find(country => country.id === id);

  if(!selectedCountry) {
    return res.status(404).send("Country not found!");
  }

  res.render("pages/detail", {
    docTitle:`whyGo? | ${selectedCountry.name}`,
    info: selectedCountry
  })
})

export default europeRoutes