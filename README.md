# Basic to-do app with express.js

  - Used lowdb as database that stores data in json.
  - Really simple authentication but not for production
  - For testing there is a user. **username**: `admin`, **password**: `admin`


### Installation

```sh
$ git clone https://github.com/kadiryazici/basic-express-todo-app-with-auth.git
$ cd basic-express-todo-app-with-auth
$ npm install
$ npm run start
```

### Built-in app to test api.
- Visit /app to test api by app.

### API

| Type | Name | Location | Body | Headers | Returns [{}] |
| :------: | ------ | ----- | :-----: | :-----: | :----: |
| <br>`POST`<br><br> | Login | /login | `username`<br> `password`  | `-` | `id` |
| <br>`POST`<br><br> | SignUp | /signup | `username`<br> `password` | `-` | `id` | 
| <br>`POST`<br><br> | Add Todo | /add | `text` | `authorization: id` | `id`<br> `isDone`<br> `text` | 
| <br>`POST`<br><br> | Delete Todo | /delete | `id` | `authorization: id` | `-` | 
| <br>`GET`<br><br> | Get Todos | /todos | `-` | `authorization: id` |  `id`<br> `isDone`<br> `text` | 
| <br>`PUT`<br><br> | Update Todo | /update | `id`<br> `isDone: Boolean` | `authorization: id` | `id`<br> `isDone`<br> `text` | 
