const express = require("express");
require("dotenv").config();
const dbConnect = require("./dbConnect")
const characterRoutes = require("./routes/characterRoutes");
// const fetchComicVineData = require("./services/comicVineAPI");
const commentRoutes = require("./routes/commentRoutes");
const postRoutes = require("./routes/postRoutes");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

// dbConnect().then(async () => {
//     await fetchComicVineData();

app.use('/api/character', characterRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
