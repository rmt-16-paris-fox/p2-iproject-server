# F2P Game App
F2P Game App is an application to search list free to play games. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## List endpoints

- `POST /users/register`
- `POST /users/login`
- `POST /users/authGoogle`
- `POST /users/userData`
- `POST /games`
- `GET /paginations`
- `GET /apis`
- `GET /apis/:id`
- `DELETE /games/:id`

&nbsp;

## RESTful endpoints

&nbsp;

### POST /users/register

> Create new user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "username": "<string>",
  "email": "<text>"
  "password": "<string>"
}
```

_Response (201 - Created)_
```
{
    "id": 1,
    "username": "user",
    "email": "user@user.com",
    
}
```

_Response (400 - Bad Request)_
```
{
    "message": [
        "username is required",
        "email is required",
        "wrong format email",
        "password is required"
    ]
}
OR
{
    "message": "Email user@user.com is already registered"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /users/login

> login user

_Request Header_
```
not needed
```

_Request Body_
```
{
  "email": "<string>",
  "password": "<string>"
}
```

_Response (200 - OK)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwiaWF0IjoxNjM0ODM3OTk4fQ.naleSL_scaw_ZFlixHVCd7B-7XIfaB1sVk125VvNcyo"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "Invalid email or password"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /users/authGoogle

> Create new games

_Request Header_
```
not needed
```

_Request Body_
```
{
  "idToken": "<generate by Google>",
  
}
```

_Response (200 - OK)_
```
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJiZXJubGVhcm50b2NvZGVAZ21haWwuY29tIiwicm9sZSI6IlN0YWZmIiwiaWF0IjoxNjMzNDIzNzUzfQ.FTvichzM9vL5mjU98PoeM_efiTzlQInN-PHL3pq5Bo0"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "Wrong email/password"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### GET /games

> Get all games

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
    {
        "id": 1,
        "title": "9 Ide Outfit Full Color ala Andien Aisyah",
        "content": "Andien Aisyah adalah penyanyi yang terkenal punya gayafashion yang unik dan nyentrik. Sering memilih pekaian bernuansa full color, Andien selalu kelihatan ceria dengan gaya berbusananya yang anti mainstream.\n\nNah, buat kamu yang bosan bergaya biasa, yuk, tiru sembilan ide outfit full color ala Andien Aisyah berikut ini. ",
        "imgUrl": "https://obs.line-scdn.net/0hUh1Q1kkaCkcMKB1uuLZ1EDR-BjY_ThBOLk4VciorVSJxBEwRZB1ZJHkhVGtxEEQVLB0SJS57VHQlS0oZNw/w644",
        "authorId": 1,
        "categoryId": 5,
        "createdAt": "2021-09-27T13:58:12.890Z",
        "updatedAt": "2021-09-27T13:58:12.890Z",
        "Category": {
            "id": 5,
            "name": "Lifestyle",
            "createdAt": "2021-09-27T13:37:58.309Z",
            "updatedAt": "2021-09-27T13:37:58.309Z"
        },
        "User": {
            "id": 1,
            "username": null,
            "email": "admin@admin.com",
            "password": "$2b$08$UQcYZwjA3j5vD7sbyBRM5u272TS.3o43aweb6NivWCO2XGXaXcn6a",
            "role": null,
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-09-27T12:34:32.699Z",
            "updatedAt": "2021-09-27T12:34:32.699Z"
        }
    },
    {
        "id": 2,
        "title": "9 Ide Outfit Full Color ala Andien Aisyah",
        "content": "Andien Aisyah adalah penyanyi yang terkenal punya gayafashion yang unik dan nyentrik. Sering memilih pekaian bernuansa full color, Andien selalu kelihatan ceria dengan gaya berbusananya yang anti mainstream.\n\nNah, buat kamu yang bosan bergaya biasa, yuk, tiru sembilan ide outfit full color ala Andien Aisyah berikut ini. ",
        "imgUrl": "https://obs.line-scdn.net/0hUh1Q1kkaCkcMKB1uuLZ1EDR-BjY_ThBOLk4VciorVSJxBEwRZB1ZJHkhVGtxEEQVLB0SJS57VHQlS0oZNw/w644",
        "authorId": 1,
        "categoryId": 5,
        "createdAt": "2021-09-27T14:04:59.585Z",
        "updatedAt": "2021-09-27T14:04:59.585Z",
        "Category": {
            "id": 5,
            "name": "Lifestyle",
            "createdAt": "2021-09-27T13:37:58.309Z",
            "updatedAt": "2021-09-27T13:37:58.309Z"
        },
        "User": {
            "id": 1,
            "username": null,
            "email": "admin@admin.com",
            "password": "$2b$08$UQcYZwjA3j5vD7sbyBRM5u272TS.3o43aweb6NivWCO2XGXaXcn6a",
            "role": null,
            "phoneNumber": null,
            "address": null,
            "createdAt": "2021-09-27T12:34:32.699Z",
            "updatedAt": "2021-09-27T12:34:32.699Z"
        }
    },
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### POST /games

> Create new games

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  "title": "<string>",
  "content": "<text>"
  "imgUrl": "<string>"
  "authorId": "<integer>"
  "categoryId": "<integer>"
}
```

_Response (201 - Created)_
```
{
    "id": <given id by system>,
    "title": "<posted title>",
    "content": "<posted content>",
    "imgUrl": "<posted imgUrl>",
    "authorId": "<posted authorId>",
    "categoryId": "<posted categoryId>",
    "createdAt": "<createdAt by system>,"
    "updatedAt": "<updatedAt by system>,",
}
```

_Response (400 - Bad Request)_
```
{
  "message":  
    [
        "title is required",
        "content is required"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### GET /games/:id

> Get games by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Params_
```
id: <integer>
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "title": "9 Ide Outfit Full Color ala Andien Aisyah",
    "content": "Andien Aisyah adalah penyanyi yang terkenal punya gayafashion yang unik dan nyentrik. Sering memilih pekaian bernuansa full color, Andien selalu kelihatan ceria dengan gaya berbusananya yang anti mainstream.\n\nNah, buat kamu yang bosan bergaya biasa, yuk, tiru sembilan ide outfit full color ala Andien Aisyah berikut ini. ",
    "imgUrl": "https://obs.line-scdn.net/0hUh1Q1kkaCkcMKB1uuLZ1EDR-BjY_ThBOLk4VciorVSJxBEwRZB1ZJHkhVGtxEEQVLB0SJS57VHQlS0oZNw/w644",
    "authorId": 1,
    "categoryId": 5,
    "createdAt": "2021-09-27T13:58:12.890Z",
    "updatedAt": "2021-09-27T13:58:12.890Z",
    "Category": {
        "id": 5,
        "name": "Lifestyle",
        "createdAt": "2021-09-27T13:37:58.309Z",
        "updatedAt": "2021-09-27T13:37:58.309Z"
    },
    "User": {
        "id": 1,
        "username": null,
        "email": "admin@admin.com",
        "password": "$2b$08$UQcYZwjA3j5vD7sbyBRM5u272TS.3o43aweb6NivWCO2XGXaXcn6a",
        "role": null,
        "phoneNumber": null,
        "address": null,
        "createdAt": "2021-09-27T12:34:32.699Z",
        "updatedAt": "2021-09-27T12:34:32.699Z"
    }
}
```
_Response (404 - Not Found)_
```
{
    "message": "Id is not found"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### PUT /games/:id

> Edit games by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Params_
```
id: <integer>
```

_Request Body_
```
{
  "title": "<string>",
  "content": "<text>"
  "imgUrl": "<string>"
  "categoryId": "<integer>"
}
```

_Response (200 - OK)_
```
{
    "id": <id>,
    "title": "<title",
    "content": "<content>",
    "imgUrl": "<imgUrl>",
    "authorId": "<authorId>",
    "categoryId": "<categoryId>",
    "createdAt": "<createdAt by system>,"
    "updatedAt": "<updatedAt by system>,",
}
```
_Response (404 - Not Found)_
```
{
    "message": "Id is not found"
}
```
_Response (400 - Bad Request)_
```
{
  "message":  
    [
        "title is required",
        "content is required"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### PATCH /games/:id

> Edit games by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Params_
```
id: <integer>
```

_Request Body_
```
{
  "status": "active",

}
```

_Response (200 - OK)_
```
{
    "id": <id>,
    "title": "<title",
    "content": "<content>",
    "imgUrl": "<imgUrl>",
    "authorId": "<authorId>",
    "categoryId": "<categoryId>",
    "status": "active",
    "createdAt": "<createdAt by system>,"
    "updatedAt": "<updatedAt by system>,",
}
```
_Response (404 - Not Found)_
```
{
    "message": "Id is not found"
}
```
_Response (400 - Bad Request)_
```
{
  "message":  
    [
        "title is required",
        "content is required"
    ]
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---
### DELETE /games/:id

> Edit games by Id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Params_
```
id: <integer>
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
{
    "message": "games '9 Ide Outfit Full Color ala Andien Aisyah' has been deleted"
}
```
_Response (404 - Not Found)_
```
{
    "message": "Id is not found"
}
```
_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---

### GET /categories

> Get all games

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
  {
        "id": 1,
        "name": "Business, Finance & Economics",
        "createdAt": "2021-09-30T10:22:48.933Z",
        "updatedAt": "2021-09-30T10:22:48.933Z"
    },
    {
        "id": 2,
        "name": "Computer, Science & Technology",
        "createdAt": "2021-09-30T10:22:48.933Z",
        "updatedAt": "2021-09-30T10:22:48.933Z"
    },
    {
        "id": 3,
        "name": "Entertainment, Art & Culture",
        "createdAt": "2021-09-30T10:22:48.933Z",
        "updatedAt": "2021-09-30T10:22:48.933Z"
    },
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---

### GET /histories

> Get all games

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200 - OK)_
```
[
   {
        "id": 185,
        "entityId": 18,
        "title": "Shandy Aulia Dipolisikan Terkait Dugaan Endorse Judi Online",
        "description": "games with id 18 status has been updated from archived into active",
        "updatedBy": "admin3@admin.com",
        "createdAt": "2021-10-09T13:22:26.339Z",
        "updatedAt": "2021-10-09T13:22:26.339Z"
    },
    {
        "id": 184,
        "entityId": 20,
        "title": "Aneh tapi Nyata, 3 Pasang Atlet Ini Berseteru meski Jadi Rekan Satu Tim",
        "description": "games with id 20 status has been updated from archived into active",
        "updatedBy": "admin3@admin.com",
        "createdAt": "2021-10-09T13:22:24.636Z",
        "updatedAt": "2021-10-09T13:22:24.636Z"
    },
    {
        "id": 183,
        "entityId": 22,
        "title": "Aneh tapi Nyata, 3 Pasang Atlet Ini Berseteru meski Jadi Rekan Satu Tim",
        "description": "games with id 22 status has been updated from archived into active",
        "updatedBy": "admin3@admin.com",
        "createdAt": "2021-10-09T13:22:23.587Z",
        "updatedAt": "2021-10-09T13:22:23.587Z"
    },
    ...
]
```

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---