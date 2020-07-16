import db from "../../db/setUpDb.js";

export default (req, res) => {
    const auth = req.headers.authorization;
    const isauth = db.get('users').find({ id: auth }).value();
    const { body } = req;

    if (auth && isauth) {
        if (body.id) {
            try {
                db.get('users')
                    .find({ id: auth })
                    .get('todos')
                    .remove({ id: body.id })
                    .write();

                res.status(200).send('{ status: "success" }');
            } catch (error) {
                res.status(401).send('{ status: "error" }')
            }
        } else {
            res.status(401).send('{ status: "missing parameters" }');
        }
    } else {
        res.status(401).send('{ status: "auth failed" }');
    }
}