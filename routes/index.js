'use strict';

function getHomePage(req, res) {
    let query = "SELECT * FROM `players` ORDER BY id ASC";

    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            title: 'Bem vindo ao Socka | View Players',
            players: result
        });
    });
}

module.exports = {getHomePage};