import express from "express";
import * as path from "path";
import { homeContent } from "../data/data.js";


const homeRouter = express.Router()
const __dirname = path.resolve();

homeRouter.get (`/`, (req, res) => {
  res.render(path.join(__dirname, "views/pages/homepage"),{
    docTitle:"Eurasia | Home",
    introData: homeContent
  });
});

export default homeRouter