# 99Recipes App Server

## Users RESTful Endpoints

### POST /register

> Register new user

_Request Header_

```
Not needed
```

_Request Body_

```
{
  "name": "string",
  "username": "string",
  "email": "string",
  "phoneNumber": "string",
  "address": "string",
  "password": "string",
}
```

_Response (201 - New User Created)_

```
{
  "id" : <new user id>,
  "username": <new user username>,
  "email" : <new user email>,
}
```

_Response (400 - Bad Request)_

```
{
  "message": [
    "Username already registered"
    "Invalid email format"
    "Email already registered"
    "Password length minimal 6 character"
    "Username is required",
    "Email is required",
    "Password is required",
    "Name is required"
  ]
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### POST /login

> Authenticate user

_Request Header_

```
Not needed
```

_Request Body_

```
{
  "email" : <user email>,
  "password" : <user password>
}

```

_Response (200 - Success Login)_

```
{
  "access_token" : <access_token>
}
```

_Response (401 - Unauthorized)_

```
{
  "message" : "Incorrect email / username or password"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message" : "Internal Server Error"
}
```

&nbsp;

### POST /login-google

> Log in / Register with Google OAuth 2.0

_Request Header_

```
Not needed
```

_Request Body_

```
{
  "google_token" : <token from getAuthResponse()>
}

```

_Response (201 - New User Created)_

```
{
  "id" : <new user id>,
  "name" : <new user name>,
  "email" : <new user email>,
  "username" : <new user username>,
  "password" : <random password from password generator>,
}
```

_Response (200 - User Found)_

```
{
  "access_token" : <access_token>
}
```

_Response (500 - Internal Server Error)_

```
{
  "error" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /user-data**

> Get user data

_Request Header_

```
{
  "access_token" : <access_token>
}
```

_Request Body_

```
Not needed
```

_Response (200 - Success)_

```
{
  "id" : <id user>,
  "username" : <username user>,
  "email" : <email user>,

  "id": <id user>,
  "username": <username user>,
  "email": <email user>,
  "name": <name user>,
  "photo": <photo user>,
  "phoneNumber": <phone number user>,
  "address": <address user>,
}
```

_Response (401 - Unauthorized)_

```
{
  "error" : "Invalid token"
}
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "Internal Server Error"
}
```

&nbsp;
