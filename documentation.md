# Learn With Damar API Documentation
## Models :

_User_

```
- email : string, required, unique
- name : string, required
- password : string, required
- status: string, required
- verifyCode: string, required
```

_Class_

```
- title : string, required
- instructor : string, required
- description : string, required
- imageUrl : string, required
- category : string, required
- price : string, required
```

_MyClass_

```
- UserId : integer, required
- CourseId : integer, required
- status : string, (default: "Unfinished")
```
## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `PATCH /verification/:verifyCode`
- `POST /login-google`
- `GET /class`
- `GET /class/:id`

Routes below need authentication:

- `POST /myclass/:classId`
- `GET /myclass`

Routes below need authentication & authorization:

- `PATCH /myclass/:id`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "email": "string",
  "name": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": "integer",
  "name": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

## POST /login-google

Description:
- Login with google account

Request:

- body:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (201 - CREATED)_

```json
{
  "id": "integer",
  "email": "string",
  "name": "string",
  "access_token": "string"
}
```

&nbsp;

## 3. GET /class

Description:
- Get all class from database

_Response (200 - OK)_

```json
[
  {
    "title": "Intro Vue",
    "instructor": "Arnold Therigan",
    "imageUrl": "https://docs.vuejs.id/images/logo.png",
    "description": "Mempelajari React JS dengan Instructor berpengalaman",
    "price": 550000,
    "category": "Front End"
  },
  {
    "title": "REST API",
    "instructor": "Edison",
    "imageUrl": "https://billwerk.io/wp-content/uploads/sites/2/2019/05/icons-restapi-350x350.png",
    "description": "Mempelajari React JS dengan Instructor berpengalaman",
    "price": 550000,
    "category": "Front End"
  },
  {
    "title": "JQuery & Bootstrap",
    "instructor": "Rifki Fauzi",
    "imageUrl": "https://www.kindpng.com/picc/m/445-4450455_css-logo-jquery-html-css-and-jquery-hd.png",
    "description": "Mempelajari React JS dengan Instructor berpengalaman",
    "price": 550000,
    "category": "Front End"
  },
  ...,
]
```

## GET /class/:id

Description:
- Get class by id

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
[
  {
    "title": "Intro Vue",
    "instructor": "Arnold Therigan",
    "imageUrl": "https://docs.vuejs.id/images/logo.png",
    "description": "Mempelajari React JS dengan Instructor berpengalaman",
    "price": 550000,
    "category": "Front End"
  }
]
```

&nbsp;

## 4. POST /myclass/:classId

Description:
- Add class to myclass

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "courseId": "integer (required)"
}
```

_Response (201 - Created)_

```json
{
  "id": 1,
  "CourseId": 2,
  "UserId": 1,
  "status": "Uncompleted"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Course not found"
}
```

&nbsp;

## 5. GET /myclass

Description:
- Get all my class from user

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 2,
    "UserId": 1,
    "ClassId": 2,
    "status": "Uncompleted",
    "Class": {
       "title": "Intro Vue",
       "instructor": "Arnold Therigan",
       "imageUrl": "https://docs.vuejs.id/images/logo.png",
       "description": "Mempelajari React JS dengan Instructor  berpengalaman",
       "price": 550000,
       "category": "Front End"
     }
  },
  {
    "id": 1,
    "UserId": 1,
    "CourseId": 1,
    "status": "Completed",
    "Class": {
       "title": "Intro Vue",
       "instructor": "Arnold Therigan",
       "imageUrl": "https://docs.vuejs.id/images/logo.png",
       "description": "Mempelajari React JS dengan Instructor  berpengalaman",
       "price": 550000,
       "category": "Front End"
     }
  }
  ...,
]
```

&nbsp;

## 6. UPDATE /myclass/:id

Description:
- Update my class to finished

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Class has been finished"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Course not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```