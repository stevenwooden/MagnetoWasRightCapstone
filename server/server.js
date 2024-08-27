const express = require("express");
require("dotenv").config();
const dbConnect = require("./dbConnect");
// const characterRoutes = require("./routes/characterRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// const Controllers = require("./controllers")

const app = express();
app.use(express.json());
// app.use('/api/character', characterRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // Controllers.characterController.fetchAndSaveCharacters();
});
