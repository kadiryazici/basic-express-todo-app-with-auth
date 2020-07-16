import db from "../../db/setUpDb.js";
import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
    const body = req.body;
    if (body.username && body.password) {
        const isUser = db.get('users').find({ name: body.name }).value();

        if (!isUser) {
            const id = uuidv4();
            try {
                db.get('users').push({
                    name: body.username,
                    password: body.password,
                    id,
                    todos: []
                }).write();

                res.status(200).send(JSON.stringify({ id }));
            } catch (error) {
                res.status(401).send('{ status: "error" }');
            }
        } else {
            res.status(401).send(JSON.stringify({ status: "user already exists" }));
        }
    } else {
        res.status(401).send(JSON.stringify({ status: "password or username is missing" }));
    }
}