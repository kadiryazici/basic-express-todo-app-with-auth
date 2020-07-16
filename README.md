# Basic to-do app with express.js

  - Used lowdb as database that stores data in json.
  - Really simple authentication but not for production



### Installation

```sh
$ git clone https://github.com/kadiryazici/basic-express-todo-app-with-auth.git
$ cd basic-express-todo-app-with-auth
$ npm install
$ npm run start
```

### API

| Type | Name | Location | Body | Headers | Returns [{}] |
| :------: | ------ | ----- | :-----: | :-----: | :----: |
| <br>`POST`<br><br> | Login | /login | `username`<br> `password`  | `-` | `id` |
| <br>`POST`<br><br> | SignUp | /signup | `username`<br> `password` | `-` | `id` | 
<<<<<<< HEAD
| <br>`POST`<br><br> | Add Todo | /add | `todo.text` | `authorization: id` | `-` | 
| <br>`GET`<br><br> | Get Todos | /todos | `-` | `authorization: id` |  `todo.id`<br> `todo.isDone`<br> `todo.text` | 
| <br>`PUT`<br><br> | Update Todo | /update | `todo.id`<br> `todo.isDone` | `authorization: id` | `todo.id`<br> `todo.isDone`<br> `todo.text` | 
| <br>`DELETE`<br><br> | Delete Todo | /delete | `todo.id` | `authorization: id` | `-` |
=======
| <br>`POST`<br><br> | Add Todo | /add | `text` | `authorization: id` | `-` | 
| <br>`GET`<br><br> | Get Todos | /todos | `-` | `authorization: id` |  `id`<br> `isDone`<br> `text` | 
| <br>`PUT`<br><br> | Update Todo | /update | `id`<br> `isDone: Boolean` | `authorization: id` | `id`<br> `isDone`<br> `text` | 
| <br>`DELETE`<br><br> | Delete Todo | /delete | `id` | `authorization: id` | `-` | 
>>>>>>> afc4f922d4aee9f887495b064070eaa76e910f10
