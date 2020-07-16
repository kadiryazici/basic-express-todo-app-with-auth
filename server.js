import express from "express"
import Headers from "./server/setHeaders.js"

import signUp from "./server/post/signUp";
import login from "./server/post/login";
import addTodo from "./server/post/addTodo";
import updateTodo from "./server/put/updateTodo";
import getTodos from "./server/get/todos";
import deletetodo from "./server/delete/deleteTodo";

// import db from "./db/setUpDb.js";

const app = express();

app.use(express.json());
app.use(Headers);


app.post('/signup', signUp);
app.post('/login', login);
app.post('/add', addTodo);
app.get('/todos', getTodos);
app.put('/update', updateTodo);
app.delete('/delete', deletetodo);

app.listen(3000, () => {
    console.log('server is up');
});;