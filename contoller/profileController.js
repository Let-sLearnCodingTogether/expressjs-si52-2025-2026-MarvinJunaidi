export const publicProfile =
    (req, res) => {
        const username = req.params.username;

        const dataForView = {
            title : `Profil ${username}`, 
            username : username,
            bio : "TAOOOOOOOOOOOO"
        }
        res.render("public-profile", dataForView);
    };
