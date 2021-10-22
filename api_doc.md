admin login for test

```
{

  "email": "diondpkp@gmail.com",
  "password" : "laripagi"

}
```

mentor login for test

```
{

  "email": "diondpkp97@gmail.com",
  "password" : "diondpkp97@gmail.com"

}
```

Student login for test

```
{

  "email": "student@gmail.com,
  "password" : "student@gmail.com"

}
```

### POST /login

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
  "message" : "Wrong Email/Password"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message" : "Server Error"
}
```

&nbsp;

### GET /req_user

_Request Header_

```
{
  "access_token" : <access_token>
}
```

_Response (200)_

```
{
    "id": <userid>,
    "email": <useremail>
    "role" : <userrole>
}
```

_Response (401 - Unauthorized)_

```
{
  "message" : "no access"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message" : "Server Error"
}
```

&nbsp;

### GET /admin/mentor

_Request Header_

```
{
  "access_token" : <access_token>
}
```

_Response (200)_

```
{
    "totalItems": 2,
    "results": [
        {
            "id": 36,
            "name": "Sotra Fanda",
            "educationalBackground": "sarjana ekonomi",
            "address": "sarilamak",
            "phoneNumber": "081716181917",
            "UserId": 8,
            "createdAt": "2021-10-21T21:11:25.430Z",
            "updatedAt": "2021-10-21T21:42:11.073Z"
        },
        {
            "id": 35,
            "name": "Dion Kuarta",
            "educationalBackground": "SMA",
            "address": "pulutan",
            "phoneNumber": "081378957046",
            "UserId": 7,
            "createdAt": "2021-10-21T21:10:18.993Z",
            "updatedAt": "2021-10-21T21:43:44.142Z"
        }
    ],
    "totalPages": 1,
    "currentPage": 1
}
```

_Response (401 - Unauthorized)_

```
{
  "message" : "no access"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message" : "Server Error"
}
```

&nbsp;
