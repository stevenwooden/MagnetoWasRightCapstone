let express = require("express");
let router = express.Router();
let newsController = require("../controllers/newsController");

router.get('/', (res) => {
    newsController.getNews(res);
})

router.post('/create', (req, res) => {
    newsController.createNews(req.body, res);
})

router.put('/:id', (req, res) => {
    newsController.updateNews(req, res)
})

router.delete('/:id', (req, res) => {
    newsController.deleteNews(req, res)
})
module.exports = router;

