import db from "../../db/setUpDb.js";
import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
    const auth = req.headers.authorization;
    const isauth = db.get('users').find({ id: auth }).value();
    const { body } = req;

    if (auth && isauth) {
        if (body.text) {
            try {
                db.get('users')
                    .find({ id: auth })
                    .get('todos')
                    .push({
                        id: uuidv4(),
                        isDone: false,
                        text: body.text
                    })
                    .write();

                res.status(401).send('{ status: "success" }');
            } catch (error) {
                res.status(401).send('{ status: "error" }');
            }
        } else {
            res.status(401).send('{ status: "missing parameters" }');
        }
    } else {
        res.status(401).send('{ status: "auth failed" }');
    }
}