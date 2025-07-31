import express from "express";
import { stat } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import BlogPost from "./public/scripts/BlogPost.js";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded());

var blogPosts = [
    
];

function createPost() {
    let newPost = new BlogPost(
        "My First Post",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Joaquin Galang",
        "https://www.w3schools.com/css/paris.jpg",
    );

    blogPosts.push(newPost);
}

app.use(express.static("public"));

app.get("/", (req, res) => {
    const data = {
        posts: blogPosts,
    };
    res.render("index.ejs", data);
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/add", (req, res) => {
    const newPost = new BlogPost(
        req.body.title,
        req.body.content,
        req.body.author,
        req.body.thumbnail,
    );
    blogPosts.push(newPost);
    console.log(newPost);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});