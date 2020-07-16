import db from "../../db/setUpDb.js";

export default (req, res) => {
    const auth = req.headers.authorization;
    if (auth) {
        const id = db.get('users').find({ id: auth }).value();
        if (id) {
            const todos = db.get('users').find({ id: auth }).get('todos').sortBy('createdAt').value().reverse();
            res.status(200).send(JSON.stringify(todos));
        } else {
            res.status(401).send('{ status: "wrong id or user does not exist" }')
        }
    } else {
        res.status(401).send('{ status: "missing id" }');
    }
}