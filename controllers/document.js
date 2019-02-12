exports.create = (req, res) => {
    if (!req.user) {
      return res.redirect('/');
    }
    res.render('publish', {
        title: 'Publish'
    });
};
