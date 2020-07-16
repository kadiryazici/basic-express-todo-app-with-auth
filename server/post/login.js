import db from "../../db/setUpDb.js";

export default (req, res) => {
    const body = req.body;
    if (body.username && body.password) {
        const user = db.get('users').find({ name: body.username, password: body.password }).value();
        if (user) {
            res.status(200).send(JSON.stringify({ id: user.id }))
        } else {
            res.status(401).send(JSON.stringify({ status: "wrong password or username" }));
        }

    } else {
        res.status(400).send(JSON.stringify({ status: "password or username is missing" }));
    }
}
