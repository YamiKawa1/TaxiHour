const horarios = require('../public/horario.json')

const index = async (req, res) => {
    await res.render('main/index', {horarios})
};

module.exports = {
    index
};