const index = async (req, res) => {
    await res.render('main/index')
};

module.exports = {
    index
};