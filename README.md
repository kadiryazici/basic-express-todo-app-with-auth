# Basic to-do app with express.js

  - Used lowdb as database that stores data in json.
  - Really simple authentication but not for production



### Installation

```sh
$ git clone https://github.com/kadiryazici/basic-express-todo-app-with-auth.git
$ npm install
$ npm run start
```

### API

| Type | Name | Location | Body | Headers | Returns [{}] |
| :------: | ------ | ----- | :-----: | :-----: | :----: |
| `POST` | Login | /login | `username`<br> `password`  | `-` | `id` |
| `POST` | SignUp | /signup | `username`<br> `password` | `-` | `id` | 
| `POST` | Add Todo | /add | `todo.text` | `authorization: id` | `-` | 
| `GET` | Get Todos | /todos | `-` | `authorization: id` |  `todo.id`<br> `todo.isDone`<br> `todo.text` | 
| `PUT` | Update Todo | /update | `todo.id`<br> `todo.isDone` | `authorization: id` | `todo.id`<br> `todo.isDone`<br> `todo.text` | 
| `DELETE` | Delete Todo | /delete | `todo.id` | `authorization: id` | `-` | 
