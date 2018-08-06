module.exports = {
    showAll(req, res) {
        res.format({
            html() {
                res.render('Playlists/showAllPlaylists');
            },
            json() {
                res.json(res.locals.playlists);
            }
        });
    },
    showOne(req, res) {
        res.format({
            html() {
                res.render('Playlists/showOnePlaylist');
            },
            json() {
                res.json(res.locals.playlist);
            }
        });
    },
    create(req, res) {
        res.format({
            html() {
                res.render('Playlists/createPlaylist');
            },
            json() {
                res.json(res.locals.new);
            }
        });
    },
    update(req, res) {
        res.format({
            html() {
                res.render('Playlists/updatePlaylist');
            },
            json() {
                res.json(res.locals.updated);
            }
        })
    },
    delete(req, res) {
        res.format({
            html() {
                res.render('Playlists/showAllPlaylists');
            },
            json() {
                res.json(res.locals.deleted);
            }
        });
    }
};