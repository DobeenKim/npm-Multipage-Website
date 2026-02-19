import express from "express"
import homeRouter from "./routes/homepageRoutes.js"
import asiapageRoutes from "./routes/asiapageRoutes.js"
import europeRoutes from "./routes/europepageRoutes.js"

dotenv.config()

const app = express()

app.set("view engine", "ejs");

const port = process.env.PORT || 3000

app.use(express.static(`public`))

app.use(`/`, homeRouter)
app.use(`/asia`, asiapageRoutes)
app.use(`/europe`,europeRoutes)

/*404 fallback */
app.use((req, res) => {
  res.status(404).send(`
    <h2>Page Not Found!</h2>
    <p>The page ${req.originalUrl} does not exist </p>
    <a href="/">Back to Homepage</a>
  `)
})

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});