let document = require("../models/Document");

exports.create = (req, res) => {
    if (!req.user) {
      return res.redirect('/');
    }
    res.render('publish', {
        title: 'Publish'
    });
};

exports.item = (req, res) => {
    if (!req.user) {
        return res.status(400).end();
    }

    console.log(req.body);
}

exports.layout = (req, res) => {
    if (!req.user) {
        return res.status(400).end();
    }

    console.log(req.body);
}

exports.finalize = (req, res) => {
    if (!req.user) {
        return res.status(400).end();
    }

    console.log(req.body);
}
