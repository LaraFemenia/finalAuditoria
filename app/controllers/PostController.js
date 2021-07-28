const { Post } = require('../models/index');

module.exports = {

    async find(req, res, next) {
        let post = await Post.findByPk(req.params.id);

        if (!post) {
            res.status(404).json({ msg: "Post no encontrado" });
        } else {
            req.post = post;
            next();
        }
    },

    async index(req, res) {
        let posts = await Post.findAll();

        res.json(posts);
    },

    async show(req, res) {
        res.json(req.post);
    },

    async update(req, res) {

        req.post.title = req.body.title;
        req.post.body = req.body.body;

        req.post.save().then(post => {
            res.json(post);
        })

    },

    async delete(req, res) {
        req.post.destroy().then(post => {
            res.json({ msg: "Post eliminado exitosamente" });
        })
    },

}