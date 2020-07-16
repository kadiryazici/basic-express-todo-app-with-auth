import db from "../../db/setUpDb.js";

export default (req, res) => {
    const auth = req.headers.authorization;
    const isauth = db.get('users').find({ id: auth }).value();
    const { body } = req;

    if (auth && isauth) {

        if (body.id && body.isDone) {
            db.get('users')
                .find({ id: auth })
                .get('todos').find({ id: body.id })
                .assign({ isDone: body.isDone })
                .write();

            const sendData = db.get('users')
                .find({ id: auth })
                .get('todos')
                .find({ id: body.id })
                .value();

            res.status(200).send(JSON.stringify(sendData));
        } else {
            res.status(401).send('{ status: "missing parameters" }');
        }
    } else {
        res.status(401).send('{ status: "auth failed" }');
    }
}