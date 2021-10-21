# bookish-forum server

### POST /register
> register new user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "username": <username_to_register>
  "email": <email_to_register>
  "password": <password_to_register>
}
```

_Response (201)_

```
{
    "id": 5,
    "email": "email6@gmail.com"
}
```

_Response (400)_

```
{
  "message": <database validation error message>
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /login
> login registered account

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": <email_to_login>
  "password": <password_to_login>
}
```

_Response (200)_

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ1c2VyNiIsImVtYWlsIjoiZW1haWw2QGdtYWlsLmNvbSIsImlhdCI6MTYzNDc0MjEyMn0.-CIj65xDr4tj8BV_RYnhhZANIYvU4n574xtho3NzPQY"
}
```

_Response (400)_

```
{
    "message": "login failed, invalid email or password"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /google-books
> fetch books data from Google Books API

_Request Header_

```
not needed
```

_Request Body_

```
{
  "inTitle": "<title_keyword>"
}
```

_Response (200)_

```
{
    "totalItems": 475,
    "items": [
        {
            "id": "t_ZYYXZq4RgC",
            "volumeInfo": {
                "title": "Mistborn",
                "authors": [
                    "Brandon Sanderson"
                ],
                "description": "<book_description>",
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        },
        {
            "id": "F8u01NaEZU0C",
            "volumeInfo": {
                "title": "Mistborn Trilogy",
                "authors": [
                    "Brandon Sanderson"
                ],
                "description": "<book_description>",
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=F8u01NaEZU0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        },
        {
            "id": "vlc5BAAAQBAJ",
            "volumeInfo": {
                "title": "Mistborn Trilogy Boxed Set",
                "authors": [
                    "Brandon Sanderson"
                ],
                "description": "<book_description>",
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=vlc5BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        },
        {
            "id": "giDMrQEACAAJ",
            "volumeInfo": {
                "title": "Mistborn Trilogy Boxed Set",
                "authors": [
                    "Brandon Sanderson"
                ],
                "description": "<book_description>",
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=giDMrQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                }
            }
        },
        {
            "id": "vbsg3vQ8YnMC",
            "volumeInfo": {
                "title": "The Final Empire",
                "authors": [
                    "Brandon Sanderson"
                ],
                "description": "<book_description>",
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=vbsg3vQ8YnMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        },
        {
            "id": "d3ewPoqF04kC",
            "volumeInfo": {
                "title": "The Well of Ascension",
                "authors": [
                    "Brandon Sanderson"
                ],
                "description": "<book_description>",
                "imageLinks": {
                    "thumbnail": "http://books.google.com/books/content?id=d3ewPoqF04kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                }
            }
        }
    ]
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /google-books-by-id
> fetch data from Google Books API by volume ID

_Request Header_

```
not needed
```

_Request Body_

```
{
  "volumeId": "<desired google book volume id>"
}
```

_Response (200)_

```
{
    "kind": "books#volume",
    "id": "d3ewPoqF04kC",
    "etag": "LybRrWPC0/g",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/d3ewPoqF04kC",
    "volumeInfo": {
        "title": "The Well of Ascension",
        "subtitle": "Mistborn Book Two",
        "authors": [
            "Brandon Sanderson"
        ],
        "publisher": "Hachette UK",
        "publishedDate": "2010-03-30",
        "description": "<book_description>",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "0575097752"
            },
            {
                "type": "ISBN_13",
                "identifier": "9780575097759"
            }
        ],
        "readingModes": {
            "text": true,
            "image": false
        },
        "pageCount": 800,
        "printedPageCount": 952,
        "printType": "BOOK",
        "categories": [
            "Fiction / Fantasy / Epic",
            "Fiction / Fantasy / Historical",
            "Fiction / Fantasy / General",
            "Fiction / Fantasy / Action & Adventure"
        ],
        "averageRating": 4,
        "ratingsCount": 89,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "3.16.13.0.preview.2",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "<image_link>",
            "thumbnail": "<image_link>",
            "small": "<image_link>",
            "medium": "<image_link>",
            "large": "<image_link>",
            "extraLarge": "<image_link>"
        },
        "language": "en",
        "previewLink": "http://books.google.co.id/books?id=d3ewPoqF04kC&hl=&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=d3ewPoqF04kC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=d3ewPoqF04kC"
    },
    "layerInfo": {
        "layers": [
            {
                "layerId": "geo",
                "volumeAnnotationsVersion": "14"
            }
        ]
    },
    "saleInfo": {
        "country": "ID",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
            "amount": 203668,
            "currencyCode": "IDR"
        },
        "retailPrice": {
            "amount": 138494,
            "currencyCode": "IDR"
        },
        "buyLink": "https://play.google.com/store/books/details?id=d3ewPoqF04kC&rdid=book-d3ewPoqF04kC&rdot=1&source=gbs_api",
        "offers": [
            {
                "finskyOfferType": 1,
                "listPrice": {
                    "amountInMicros": 203668000000,
                    "currencyCode": "IDR"
                },
                "retailPrice": {
                    "amountInMicros": 138494000000,
                    "currencyCode": "IDR"
                }
            }
        ]
    },
    "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
        "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.co.id/books/download/The_Well_of_Ascension-sample-epub.acsm?id=d3ewPoqF04kC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
            "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=d3ewPoqF04kC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    }
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### GET /books
> fetch data from Books table in database

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "totalItems": 10,
    "books": [
        {
            "id": 2,
            "googleBooksId": "Gzk5DwAAQBAJ",
            "title": "Naruto 1",
            "imgUrl": "http://books.google.com/books/publisher/content?id=Gzk5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73vqwPuhJtiy2Kjx-eAgZI4baQWQpy-XddzMYM37gjldY2mMkzlh-zz_KwKEzGuYXmD0gtytcctcl8zUUsiu10m5496F_yEevqMI9Rl3IrWc5qbq1gShm59qCwSwmkWKlR5-Gt0&source=gbs_api",
            "author": "Masashi Kishimoto",
            "createdAt": "2021-10-19T10:48:15.143Z",
            "updatedAt": "2021-10-19T10:48:15.143Z",
            "Reviews": [
                {
                    "id": 4,
                    "rating": 5,
                    "content": "very nice",
                    "userId": 1,
                    "bookId": 2,
                    "createdAt": "2021-10-19T13:37:49.610Z",
                    "updatedAt": "2021-10-19T13:37:49.610Z"
                },
                {
                    "id": 3,
                    "rating": 4,
                    "content": "quite good",
                    "userId": 1,
                    "bookId": 2,
                    "createdAt": "2021-10-19T13:37:49.595Z",
                    "updatedAt": "2021-10-20T03:49:20.060Z"
                }
            ]
        },
        {
            "id": 1,
            "googleBooksId": "x_7AwAEACAAJ",
            "title": "Warbreaker",
            "imgUrl": "http://books.google.com/books/content?id=x_7AwAEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70ObgvB9Tfh_ayX3qrqTDWeR36vp0ig8RbzroKI9AfQx6_aUxyrJ5AteRxFFQ5Ewxj7Bwn67Psl7dmktCN8PZwzgPXCZK3SbNPR_BVACrSdgsjngsUghfIwyH_uK82vBKT6xXSV&source=gbs_api",
            "author": "Brandon Sanderson",
            "createdAt": "2021-10-17T09:15:44.243Z",
            "updatedAt": "2021-10-17T09:15:44.243Z",
            "Reviews": [
                {
                    "id": 5,
                    "rating": 5,
                    "content": "i was hooked!",
                    "userId": 2,
                    "bookId": 1,
                    "createdAt": "2021-10-19T16:18:10.014Z",
                    "updatedAt": "2021-10-19T16:18:10.014Z"
                },
                {
                    "id": 6,
                    "rating": 3,
                    "content": "Great!",
                    "userId": 1,
                    "bookId": 1,
                    "createdAt": "2021-10-20T03:06:53.981Z",
                    "updatedAt": "2021-10-20T03:45:26.344Z"
                },
                {
                    "id": 10,
                    "rating": 2,
                    "content": "not bad",
                    "userId": 3,
                    "bookId": 1,
                    "createdAt": "2021-10-20T07:41:11.125Z",
                    "updatedAt": "2021-10-20T07:52:12.177Z"
                }
            ]
        },
        {
            "id": 3,
            "googleBooksId": "OHclhBVv-X4C",
            "title": "The Way of Kings",
            "imgUrl": "http://books.google.com/books/content?id=OHclhBVv-X4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72XpDWQE6i_U6xMz7B61jp0FIfrDrrAqPjSlt-41uYgb8Zl6KDe8WLAyy3c68wYtEq1isjjgpTruQlnY7dFLsa6SmXje1C73SjdqazxM9i-nfLciFiP2NcYmwPoTsy97ecaMQM_&source=gbs_api",
            "author": "Brandon Sanderson",
            "createdAt": "2021-10-19T14:07:20.039Z",
            "updatedAt": "2021-10-19T14:07:20.039Z",
            "Reviews": [
                {
                    "id": 8,
                    "rating": 4,
                    "content": "great!",
                    "userId": 1,
                    "bookId": 3,
                    "createdAt": "2021-10-20T06:55:38.377Z",
                    "updatedAt": "2021-10-20T07:07:06.764Z"
                }
            ]
        },
        {
            "id": 5,
            "googleBooksId": "1PgKPuFIz1kC",
            "title": "The Eye of the World",
            "imgUrl": "http://books.google.com/books/content?id=1PgKPuFIz1kC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE728nGeGzWbawteaunobp4QoduGU0i7_y4ODl21vTYj7ytHbfzpNPGXbiQ7Se19CrfLasri2ic0jYPZyfbWSJF3nakT0s5jhg5S8YMgJFSW0OsFmPXJctwc9sotICpJCPAH5RZ8p&source=gbs_api",
            "author": "Robert Jordan",
            "createdAt": "2021-10-20T14:00:59.655Z",
            "updatedAt": "2021-10-20T14:00:59.655Z",
            "Reviews": []
        },
        {
            "id": 6,
            "googleBooksId": "fTDHU1p8KOkC",
            "title": "Murder on the Orient Express",
            "imgUrl": "http://books.google.com/books/content?id=fTDHU1p8KOkC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71v-ifc3gOixVqGXhTsX9QxxKau5SmsqWha6hOyiXkNcmgvPKC5zt9YWTzrln57xBkIvsu2Yt9a19vcAGVr5uMBMu9h5vkVaz4f_xPX_xk5tNaSRkT6ll0K5blSO93GWjl3MZd3&source=gbs_api",
            "author": "Agatha Christie",
            "createdAt": "2021-10-20T14:01:28.323Z",
            "updatedAt": "2021-10-20T14:01:28.323Z",
            "Reviews": []
        },
        {
            "id": 4,
            "googleBooksId": "zlwlTfBeiSoC",
            "title": "A Clash of Kings",
            "imgUrl": "http://books.google.com/books/content?id=zlwlTfBeiSoC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72e6A2REXdu6Js06jKDNvSAQr6fHPYFZwE3mduVrbO4AVey3wlAxS8A55NK5LqLiYTwXV3eg-g0IDDWt0drH1QhXu24c0MYEfzqyiXM7YAe6qFYIFCkRqVikw8kK3MzVN9g_A2F&source=gbs_api",
            "author": "George R. R. Martin",
            "createdAt": "2021-10-20T07:08:41.297Z",
            "updatedAt": "2021-10-20T07:08:41.297Z",
            "Reviews": []
        }
    ],
    "totalPages": 2,
    "currentPage": 0
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /books/:volumeId
> find book by googleBooksId

_Request Header_

```
not needed
```

_Request Body_

```
{
  "volumeId": <desired volumeId>
}
```

_Response (200)_

```
{
    "foundBook": {
        "id": 2,
        "googleBooksId": "Gzk5DwAAQBAJ",
        "title": "Naruto 1",
        "imgUrl": "<image_url>",
        "author": "Masashi Kishimoto",
        "createdAt": "2021-10-19T10:48:15.143Z",
        "updatedAt": "2021-10-19T10:48:15.143Z",
        "Reviews": [
            {
                "id": 4,
                "rating": 5,
                "content": "very nice",
                "userId": 1,
                "bookId": 2,
                "createdAt": "2021-10-19T13:37:49.610Z",
                "updatedAt": "2021-10-19T13:37:49.610Z",
                "User": {
                    "username": "user1"
                }
            },
            {
                "id": 3,
                "rating": 4,
                "content": "quite good",
                "userId": 1,
                "bookId": 2,
                "createdAt": "2021-10-19T13:37:49.595Z",
                "updatedAt": "2021-10-20T03:49:20.060Z",
                "User": {
                    "username": "user1"
                }
            }
        ]
    },
    "description": "<book_description>"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /books
> add new book to Books table in database

_Request Header_

```
not needed
```

_Request Body_

```
{
  "volumeId": <desired volumeId>
}
```

_Response (200)_

```
{
    "id": 8,
    "googleBooksId": "AZ5J6B1-4BoC",
    "title": "The Girl Who Kicked the Hornet's Nest",
    "author": "Stieg Larsson",
    "imgUrl": "http://books.google.com/books/content?id=AZ5J6B1-4BoC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72G3swUYJHY8o0JYDIQlSn834VoIUPNAmnS3QkWfMog6ExSCx8jc-UERup3kVmbbtrKFmNh80f_ODu5syhBKLE-kvRYtxi9qb-w3UnqawdA3kmx1QHXvGSzFwyHaHnw4vfgsZD0&source=gbs_api",
    "updatedAt": "2021-10-20T15:30:52.762Z",
    "createdAt": "2021-10-20T15:30:52.762Z"
}
```

_Response (403)_

```
{
    "message": "the book is already in the forum"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /shorten-url
> get shortened URL for client

_Request Header_

```
not needed
```

_Request Body_

```
{
  "url": "<url to shorten>"
}
```

_Response (200)_

```
{
    "ok": true,
    "result": {
        "code": "CpPhZ6",
        "short_link": "shrtco.de/CpPhZ6",
        "full_short_link": "https://shrtco.de/CpPhZ6",
        "short_link2": "9qr.de/CpPhZ6",
        "full_short_link2": "https://9qr.de/CpPhZ6",
        "short_link3": "shiny.link/CpPhZ6",
        "full_short_link3": "https://shiny.link/CpPhZ6",
        "share_link": "shrtco.de/share/CpPhZ6",
        "full_share_link": "https://shrtco.de/share/CpPhZ6",
        "original_link": "https://bookish-forum.web.app/"
    }
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### GET /user-data

> retrieve current logged in user data

_Request Header_

```
{
  "access_token": "<access_token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
    "id": 1,
    "username": "user1",
    "email": "email1@gmail.com"
}
```

_Response (401)_

```
{
    "message": "please login first"
}

or

{
    "message": "invalid access token"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### POST /reviews
> add new review

_Request Header_

```
{
  "access_token": "<access_token>"
}
```

_Request Body_

```
{
    "rating": 5,
    "content": "great!",
    "bookId": 7
}
```

_Response (200)_

```
{
    "id": 11,
    "rating": 5,
    "content": "great!",
    "userId": 1,
    "bookId": 7,
    "updatedAt": "2021-10-20T15:38:47.163Z",
    "createdAt": "2021-10-20T15:38:47.163Z"
}
```

_Response (401)_

```
{
    "message": "please login first"
}

or

{
    "message": "invalid access token"
}
```

_Response (403)_

```
{
    "message": "you have already reviewed this book"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### PUT /reviews
> edit or update review

_Request Header_

```
{
  "access_token": "<access_token>"
}
```

_Request Body_

```
{
    "reviewId": 11,
    "rating": 3,
    "content": "not that good"
}
```

_Response (200)_

```
{
    "message": "review updated"
}
```

_Response (401)_

```
{
    "message": "please login first"
}

or

{
    "message": "invalid access token"
}
```

_Response (403)_

```
{
    "message": "you can only delete or edit your own review"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### DELETE /reviews
> delete review

_Request Header_

```
{
  "access_token": "<access_token>"
}
```

_Request Body_

```
{
    "reviewId": 11
}
```

_Response (200)_

```
{
    "message": "review deleted"
}
```

_Response (401)_

```
{
    "message": "please login first"
}

or

{
    "message": "invalid access token"
}
```

_Response (403)_

```
{
    "message": "you can only delete or edit your own review"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```
---
### GET /reviews/:bookId
> get reviews by bookId

_Request Header_

```
{
  "access_token": "<access_token>"
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
        "id": 8,
        "rating": 4,
        "content": "great!",
        "userId": 1,
        "bookId": 3,
        "createdAt": "2021-10-20T06:55:38.377Z",
        "updatedAt": "2021-10-20T07:07:06.764Z",
        "Book": {
            "id": 3,
            "googleBooksId": "OHclhBVv-X4C",
            "title": "The Way of Kings",
            "imgUrl": "http://books.google.com/books/content?id=OHclhBVv-X4C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72XpDWQE6i_U6xMz7B61jp0FIfrDrrAqPjSlt-41uYgb8Zl6KDe8WLAyy3c68wYtEq1isjjgpTruQlnY7dFLsa6SmXje1C73SjdqazxM9i-nfLciFiP2NcYmwPoTsy97ecaMQM_&source=gbs_api",
            "author": "Brandon Sanderson",
            "createdAt": "2021-10-19T14:07:20.039Z",
            "updatedAt": "2021-10-19T14:07:20.039Z"
        }
    }
]
```

_Response (401)_

```
{
    "message": "please login first"
}

or

{
    "message": "invalid access token"
}
```

_Response (500)_

```
{
  "message": "Internal Server Error"
}
```