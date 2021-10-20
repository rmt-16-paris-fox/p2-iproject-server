# RESTful endpoints
https://restaurant-tiv8.herokuapp.com/

### POST /user/register
> CREATE food
_Request Header_
```
not needed
```
_Request Body_
```
   {
    "firstName": "<name to get insert into>",
    "lastName": "<lastName to get insert into>",
    "password": <password to get insert into>,
    "email": "<email to get insert into>",
    gender: "<gender to get insert into>"
  }
```

_Response (201 - Created)_

```
{
    message: "Your account has been created!"
}
```
_Response (400 - Bad Request)_

```
{
    "message": <list of error message>
}
```

### POST /user/login
> CREATE food
_Request Header_
```
not needed
```

_Request Body_
```
   {
    "email": "<email to get insert into>",
    "password": "<password to get insert into>"
  }
```

_Response (201 - Created)_

```
{
    "access_token": <give_access_token> 
}
```
_Response (400 - Bad Request)_

```
{
    "message": <list of error message>
}
```



### GET /user/:id
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
 not needed 
```

_Response (200)_

```
{
    "id": <given id by system>,
    "email": <given by assets>
}
```
_Response (400 - Bad Request)_

```
{
    "message": <list of error message>
}
```

### POST /posts
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
{
    "content": "<content to get insert into>",
    "imageUrl": "<imageUrl to get insert into>",
  }

```

_Response (200)_

```
{
    "message": "Your content has been posted!"
}
```
_Response (400 - Bad Request)_

```
{
    "message": <list of error message>
}
```


### GET /posts
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
no needed
```

_Response (200)_

```
[
    {
        "id": 20,
        "content": "yuk di beli",
        "imageUrl": "https://iili.io/5oMbVt.jpg",
        "UserId": 2,
        "createdAt": "2021-10-20T18:58:45.476Z",
        "updatedAt": "2021-10-20T18:58:45.476Z",
        "User": {
            "fakeName": "Hans-Wilhelm",
            "imageUrl": "https://avatars.dicebear.com/api/avataaars/Damar.svg"
        },
        "Comments": []
    },
    {
        "id": 18,
        "content": "yuk di beli",
        "imageUrl": "https://iili.io/5olyXe.jpg",
        "UserId": 2,
        "createdAt": "2021-10-20T16:52:20.010Z",
        "updatedAt": "2021-10-20T16:52:20.010Z",
        "User": {
            "fakeName": "Hans-Wilhelm",
            "imageUrl": "https://avatars.dicebear.com/api/avataaars/Damar.svg"
        },
        "Comments": []
    },
    {
        "id": 16,
        "content": "cek",
        "imageUrl": null,
        "UserId": 3,
        "createdAt": "2021-10-20T16:38:28.072Z",
        "updatedAt": "2021-10-20T16:38:28.072Z",
        "User": {
            "fakeName": "Nancy",
            "imageUrl": "https://avatars.dicebear.com/api/male/kartika.svg"
        },
        "Comments": []
    },
[
```
_Response (400 - Bad Request)_

```
{
    "message": <list of error message>
}
```

### delete /posts/:id
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
no needed
```

_Response (200)_

```
{ 
  message: "Delete post success!"
}
```
_Response (400 - Bad Request)_

```
{
    "message": "Post not found"
},
{
    "message": "Id must be a number"
}
```
_Response (403 - Forbidden)_
```
{ 
  message: "forbidden access"
}
```

### PUT /posts/:id
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
{
    "content": "<content to get insert into>",
    "imageUrl": "<imageUrl to get insert into>",
  }

```

_Response (200)_

```
{ 
    "message": "Post has been updated"
}
```
_Response (400 - Bad Request)_

```
{
    "message": "Post not found"
},
{
    "message": "Id must be a number"
}
```

_Response (404 - Forbidden)_
```
{
    "message": "forbidden access"
}

```

### GET /posts/:id

_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
no needed

```

_Response (200)_

```
{
    "id": 1,
    "content": "warna warni",
    "imageUrl": "https://iili.io/5oCFtI.jpg",
    "UserId": 1,
    "createdAt": "2021-10-20T09:57:34.771Z",
    "updatedAt": "2021-10-20T14:12:08.238Z"
}
```
_Response (400 - Bad Request)_

```
{
    "message": "Post not found"
},
{
    "message": "Id must be a number"
}
```
_Response (404 - Forbidden)_
```
{
    "message": "forbidden access"
}

```


### POST /comments/:id

_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
{
  "comment" : "<content to get insert into>"
}
```

_Response (201)_

```
{
    "message": "comment has been posted to this post"
}
```
_Response (400 - Bad Request)_

```
{
    "message": "Post not found"
},
{
    "message": "Id must be a number"
}
```

### GET /comments/:id
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
no needed
```

_Response (200)_

```
{
    "response": [
        {
            "id": 1,
            "UserId": 1,
            "PostId": 1,
            "comment": "dasar",
            "createdAt": "2021-10-20T10:19:26.109Z",
            "updatedAt": "2021-10-20T10:19:26.109Z"
        }
    ]
}
```
_Response (400 - Bad Request)_

```
{
    "message": "Post not found"
},
{
    "message": "Id must be a number"
}
```

### DELETE /comments/:id
_Request Header_
```
{access_token:<given id by system>}
```

_Request Body_
```
no needed
```

_Response (200)_

```
{
    "message": "comment has been deleted"
}
```
_Response (400 - Bad Request)_

```
{
    "message": "Post not found"
},
{
    "message": "Id must be a number"
}
```