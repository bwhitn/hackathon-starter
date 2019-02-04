exports.status = (req, res) => {
    if (!req.user) {
      return res.redirect('/');
    }
    res.render('status', {
        title: 'Server Status'
    });
};
