# FoodPedia App Server

FoodPedia App is an application to manage your restaurant's food. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /

> Get all foods

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

_Response (200)_

```
[
    {
        "id": 4,
        "name": "Nasi ",
        "description": "Bakar",
        "price": 15000,
        "imgUrl": "https://asset.kompas.com/crops/liot8ogozEEYAUXlZNXyGL0pTQc=/3x0:700x465/750x500/data/photo/2021/04/08/606e886b972ac.jpeg",
        "authorId": 1,
        "categoryId": 1,
        "createdAt": "2021-09-27T12:55:42.805Z",
        "updatedAt": "2021-09-27T12:55:42.805Z"
    },
    {
        "id": 3,
        "name": "Nasi",
        "description": "Goreng",
        "price": 12000,
        "imgUrl": "https://asset.kompas.com/crops/liot8ogozEEYAUXlZNXyGL0pTQc=/3x0:700x465/750x500/data/photo/2021/04/08/606e886b972ac.jpeg",
        "authorId": 1,
        "categoryId": 1,
        "createdAt": "2021-09-27T12:43:30.768Z",
        "updatedAt": "2021-09-27T12:43:30.768Z"
    },
    {
        "id": 5,
        "name": "Mie",
        "description": "Kuah",
        "price": 12000,
        "imgUrl": "https://asset.kompas.com/crops/liot8ogozEEYAUXlZNXyGL0pTQc=/3x0:700x465/750x500/data/photo/2021/04/08/606e886b972ac.jpeg",
        "authorId": 1,
        "categoryId": 1,
        "createdAt": "2021-09-27T13:57:47.855Z",
        "updatedAt": "2021-09-27T13:57:47.855Z"
    }
]
```

_Response Register(200)_
{
"id": 3,
"email": "b@mail.com"
}

---

### POST /add

> Create new food

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "name": "<name to get insert into>",
  "description": "<description to get insert into>",
  "price": "<price to get insert into>",
  "imgUrl": "<imgUrl to get insert into>",
  "authorId": "<authorId to get insert into>",
  "categoryId": "<categoryId to get insert into>"
}
```

_Response (201 - Created)_

```
{
        "id": 3,
        "name": "Nasi",
        "description": "Goreng",
        "price": 12000,
        "imgUrl": "https://asset.kompas.com/crops/liot8ogozEEYAUXlZNXyGL0pTQc=/3x0:700x465/750x500/data/photo/2021/04/08/606e886b972ac.jpeg",
        "authorId": 1,
        "categoryId": 1,
        "createdAt": "2021-09-27T12:43:30.768Z",
        "updatedAt": "2021-09-27T12:43:30.768Z"
    }
```

_Response (400 - Bad Request)_

```
{
    "message": [
        "Validation notEmpty on name failed",
        "Validation notEmpty on description failed"
    ]
}
```

### POST /edit

> Edit food by id

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "name": "<name to get insert into>",
  "description": "<description to get insert into>",
  "price": "<price to get insert into>",
  "imgUrl": "<imgUrl to get insert into>",
  "authorId": "<authorId to get insert into>",
  "categoryId": "<categoryId to get insert into>"
}
```

_Response (201 - Updated)_

```
{
    "id": 16,
    "name": "Mie ",
    "description": "Telor",
    "price": 12000,
    "imgUrl": "https://ik.imagekit.io/ljyp1oimzqm/nasi_AMF00jsoz.jpg",
    "authorId": 1,
    "categoryId": 1,
    "status": "active",
    "createdAt": "2021-10-05T09:37:25.768Z",
    "updatedAt": "2021-10-05T16:48:59.029Z"
}
```

_Response (404 - Not Found)_

```
{
    {
    "message": "Food Not Found"
    }
}
```
