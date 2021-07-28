const { User } = require('../models/index');

module.exports = {

    show(req, res, next) {
        if(req.user.id === req.post.userId || User.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No puedes ver este post" });
        }
    },

    update(req, res, next) {
        if(req.user.id === req.post.userId  || User.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No puedes ver este post" });
        }
    },

    delete(req, res, next) {
        if(req.user.id === req.post.userId  || User.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No puedes ver este post" });
        }
    }

}