import db from "../../db/setUpDb.js";

export default (req, res) => {
    const body = req.body;
    if (body.username && body.password) {
        const isUser = db.get('users').find({ name: body.username }).value();
        if (isUser) {
            res.status(200).send(JSON.stringify({ status: "success", id: isUser.id }))
        } else {
            res.status(401).send(JSON.stringify({ status: "wrong password or username" }));
        }

    } else {
        res.status(400).send(JSON.stringify({ status: "password or username is missing" }));
    }
}
