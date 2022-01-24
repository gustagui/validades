const indexController = {
    showHome: (req, res) => {
        res.render('home')
    },
    showNotify: (req, res) => {
        res.render('notify')
    }
};

module.exports = indexController;