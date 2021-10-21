# FoodPedia App Server

FoodPedia App is an application to manage your restaurant's food. This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### GET /

> Get all foods from api

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

\_Response (200)\_data from the api

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
"id": 6,
"email": "ab@mail.com"
}

---

_Response Login(200)_
{
"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhQG1haWwuY29tIiwiaWF0IjoxNjM0ODE5NjMwfQ.GNNzFHqYZmAQMYliX2V1kS31ejXy-uIyPhDgJwX05mc"
}

### POST /review

> Create new review

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "foodCode": "<foodcode to get insert into>",
  "productName": "<name to get insert into>",
  "image": "<imageurl to get insert into>",
  "description": "<description to get insert into>",
  "review": "<review to get insert into>",
}
```

_Response (201 - Created)_

```
{
    "response": {
        "id": 1,
        "userId": 1,
        "foodCode": "budi",
        "productName": "b@mail.com",
        "image": "https://www.seekpng.com/png/full/350-3506540_picture-small-phone-icon-png.png",
        "description": "asiksekali",
        "review": "inisangatamatenakdanmurah",
        "updatedAt": "2021-10-21T01:27:52.814Z",
        "createdAt": "2021-10-21T01:27:52.814Z"
    }
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

### POST /favourite

> Bookmark food by code

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "foodCode": "<foodcode to get insert into>",
  "productName": "<productname to get insert into>",
  "image": "<imageurl to get insert into>",
  "description": "<description to get insert into>",
}
```

_Response (201 - Created)_

```
{
    "id": 1,
    "userId": 1,
    "foodCode": "budi",
    "productName": "budi12345",
    "image": "https://www.seekpng.com/png/full/350-3506540_picture-small-phone-icon-png.png",
    "description": "asiksekali",
    "updatedAt": "2021-10-21T01:13:00.927Z",
    "createdAt": "2021-10-21T01:13:00.927Z"
}
```

_Response (404 - Token Not Found)_

```
{
    {
    "message": "Token Not Found"
    }
}
```
