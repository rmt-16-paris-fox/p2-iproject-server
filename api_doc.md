# Learn Kanji App Server

&nbsp;

## Authentication

### POST /register

> Create new User

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to insert>",
  "password": "<password to insert>"
}
```

_Response (201 - Created)_

```
{
  msg: "new user created"
}
```

_Response (400 - Bad Request)_

```
{
  msg: "error bad request"
}
```

---

### POST /login

> User Login

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to insert>",
  "password": "<password to insert>"
}
```

_Response (200 - HTTP OK)_

```
{
  "access_token": "<server generated access token>"
}
```

_Response (401 - Unauthorized)_

```
{
  msg: "wrong email/password"
}
```

---

## endpoints

> Get all kanji in selected grade level (1 - 6)

### GET /kanji/grade/:gradeLevel

_Response (200)_

> top 2 of kanji grade level 1 result

```
[
    {
        "kanji": {
            "character": "一",
            "stroke": 1
        },
        "radical": {
            "character": "⼀",
            "stroke": 1,
            "order": 1
        }
    },
    {
        "kanji": {
            "character": "十",
            "stroke": 2
        },
        "radical": {
            "character": "⼗",
            "stroke": 2,
            "order": 28
        }
    },
    ...
]
```

> Basic search kanji by kanji name or english word

### GET /kanji/search

_query params_

```
value: <search value>
```

_Response (200)_

> respnse with params value 'rain'

```
[
    {
        "kanji": {
            "character": "雨",
            "stroke": 8
        },
        "radical": {
            "character": "⾬",
            "stroke": 8,
            "order": 210
        }
    }
    ...
]
```

> Get kanji details of :kanjiName (kanji characters)

### GET /kanji/:kanjiName

_Response (200)_

> :kanjiName 車 result

```
{
    "result": {
        "kanji": {
            "character": "車",
            "meaning": {
                "english": <english meaning, comma separated if more than one>
            },
            "strokes": {
                "count": <stroke count>,
                "timings": [
                    <timings stroke value>,
                    ...
                ],
                "images": [
                    <image link url>,
                    ...
                ]
            },
            "onyomi": {
                "romaji": "sha",
                "katakana": "シャ"
            },
            "kunyomi": {
                "romaji": "kuruma",
                "hiragana": "くるま"
            },
            "video": {
                "poster": <link url>,
                "mp4": <link url>,
                "webm": <link url>
            }
        },
        "radical": {
            "character": "⾞",
            "strokes": 7,
            "image": <link url>,
            "position": {
                "hiragana": "",
                "romaji": "",
                "icon": ""
            },
            "name": {
                "hiragana": "くるま",
                "romaji": "kuruma"
            },
            "meaning": {
                "english": "vehicle, wheel, car"
            },
            "animation": [
                <link url>,
                <link url>,
                ...
            ]
        },
        "references": {
            "grade": 1,
            "kodansha": "2212",
            "classic_nelson": "4608"
        },
        "examples": [
            {
                "japanese": "自転車（じてんしゃ）",
                "meaning": {
                    "english": "bicycle"
                },
                "audio": {
                    "opus": <link url>,
                    "aac": <link url>,
                    "ogg": <link url>,
                    "mp3": <link url>
                }
            },
            ...
        ]
    }
}
```
