import express from "express"
import Headers from "./server/setHeaders.js"

import signUp from "./server/post/signUp";
import login from "./server/post/login";
import addTodo from "./server/post/addTodo";
import deletetodo from "./server/post/deleteTodo";
import updateTodo from "./server/put/updateTodo";
import getTodos from "./server/get/todos";

import path from "path";

const app = express();

app.use(express.static(__dirname + "/ui"))

app.use(express.json());
app.use(Headers);


app.post('/signup', signUp);
app.post('/login', login);
app.post('/add', addTodo);
app.post('/delete', deletetodo);
app.get('/todos', getTodos);

//UI
const ui = path.join(__dirname + "/ui/index.html");
app.get('/app', (req, res) => { res.sendFile(ui) });

app.put('/update', updateTodo);

app.listen(3000, () => {
    console.log('server is up');
});;