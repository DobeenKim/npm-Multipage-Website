import express from "express";
import * as path from "path";
import { asiaArray } from "../data/data.js";


const asiapageRoutes = express.Router();
const __dirname = path.resolve();

asiapageRoutes.get("/", (req,res) => {
  res.render("pages/region", {
    docTitle: "Eurasia | Asia",
    info:asiaArray.asia,
    countries: asiaArray.asia.countries,
    currentRegion: "asia"
  })
})

asiapageRoutes.get("/:id", (req,res) => {
  const { id } = req.params;

  const selectedCountry = asiaArray.asia.countries.find(country => country.id === id);

  if(!selectedCountry) {
    return res.status(404).send("Country not found!");
  }

  res.render("pages/detail", {
    docTitle:`whyGo? | ${selectedCountry.name}`,
    info: selectedCountry
  })
})

export default asiapageRoutes