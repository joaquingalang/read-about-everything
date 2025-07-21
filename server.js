import express from "express";
import { stat } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// var blogPosts = [];

// var blog = {
//     title: "My First Blog",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     author: "Joaquin Galang",
// };

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/blog", (req, res) => {

});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});