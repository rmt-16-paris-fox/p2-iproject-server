# Sports-8 server documentation

## Post /register
Create new user

### Request Body
```
{
    "email": "<email to get insert into>",
    "password": "<password to get insert into>",
}
```

### Response (201-Created)
```
{
    "id": 5,
    "email": "Seiya@yahoo.com"
}
```

### Response (400 - Bad Request)
```
{
    "message": [
        "Email is required",
        "Password is required"
    ]
}
```

## Post /login
user login

### Request Body
```
{
    "email": "<posted email>"
    "password": "<posted password>"
}
```

### Response (201-Created)
```
{
    "access_token": "<token>"
}
```

### Response (401 - Unauthorized)
```
{
    "msg": "Wrong Email/Password"
}
```

## Get /schedule
Get all match schedule

### Request Header
```
{
    "access_token": "<token>"
}
```

### Response (200-Success)
```
[
    {
        "fixture": {
            "id": 710626,
            "referee": "M. Dean",
            "timezone": "UTC",
            "date": "2021-10-18T19:00:00+00:00",
            "timestamp": 1634583600,
            "periods": {
                "first": null,
                "second": null
            },
            "venue": {
                "id": 494,
                "name": "Emirates Stadium",
                "city": "London"
            },
            "status": {
                "long": "Not Started",
                "short": "NS",
                "elapsed": null
            }
        },
        "league": object,
        "teams": {
            "home": object,
            "away": object
        },
        "goals": object,
        "score": object
    }
]
```

### Response (400 - Bad Request)
```
{
    "msg": "Schedule not found"
}
```

## Get /watchlist
Get all user watchlist

### Request Header
```
{
    "access_token": "<token>"
}
```

### Request User
```
{
    "id": "<user id>",
    "email": "<user.email>"
}
```

### Response (200-Success)
```
[
    {
        "UserId": 1,
        "fixturesId": "710626",
        "id": 8,
        "playDate": "2021-10-18T19:00:00.000Z",
        "data": {
            "fixture": object,
            "league": object,
            "teams": {
                "home": object,
                "away": object
            },
            "goals": object,
            "score": object
        }
    },
]
```

### Response (400 - Bad Request)
```
{
    "msg": "Watchlist not found"
}
```

## Get /watchlist/:id
Get all user watchlist

### Request Header
```
{
    "access_token": "<token>"
}
```

### Request User
```
{
    "id": "<user id>",
    "email": "<user.email>"
}
```

### Request Params
```
{
    "id": "<watchlist id>"
}
```

### Response (200-Success)
```
[
    {
        "UserId": 1,
        "fixturesId": "710626",
        "id": 8,
        "playDate": "2021-10-18T19:00:00.000Z",
        "data": {
            "fixture": object,
            "league": object,
            "teams": {
                "home": object,
                "away": object
            },
            "goals": object,
            "score": object
        }
    },
]
```

### Response (400 - Bad Request)
```
{
    "msg": "Watchlist not found"
}
```

## Post /watchlist
Create new watchlist

### Request Header
```
{
    "access_token": "<token>"
}
```

### Request Body
```
{
    "fixturesId": "<fixturesId to get insert into>",
    "playDate": "<playDate to get insert into>",
    "data": "<data to get insert into>"
}
```

### Request User
```
{
    "id": "<user id>",
    "email": "<user.email>"
}
```

### Response (201-Created)
```
{
    'msg': 'Added to watchlist'
}
```