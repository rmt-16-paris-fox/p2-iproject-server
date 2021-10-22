### POST /register

Request Header

no needed

Request Body
{
username,
email,
password,
price,
address,

}

respon 201(create)
{
"username": <user_name>
"email": <email>
"address:<email>
}

respon 400(bad request)
{
"message": [
null
]
}

### POST /login

Request Header

no needed

Request Body
{
email,
password,
}

respon 201(create)
{
token:<token>
}

respon 401()
{
"name": "Invalid email or password"
}


### GET /plants

Request Header

{
"access_token" : "<your acess token>"
}

Request Body
no neded
respon 200()
[
    {
        "id": 1,
        "name": "bunga matahari",
        "category": "bunga hias dengan bunga",
        "description": "1x 3hari penyiraman",
        "price": 250000,
        "imageUrl": "https://ik.imagekit.io/za3wmrmu9re/bunga_matahari_SGe3YEgnmEi.jpg",
        "UserId": 3,
        "createdAt": "2021-10-22T00:51:14.116Z",
        "updatedAt": "2021-10-22T00:51:14.116Z"
    },
    {
        "id": 2,
        "name": "bunga matahari",
        "category": "bunga hias dengan bunga",
        "description": "1x 3hari penyiraman",
        "price": 250000,
        "imageUrl": "https://ik.imagekit.io/za3wmrmu9re/bunga_matahari_rfchUTEPv.jpg",
        "UserId": 3,
        "createdAt": "2021-10-22T00:52:22.817Z",
        "updatedAt": "2021-10-22T00:52:22.817Z"
    }
]

### POST /plants

Request Header

{
"access_token" : "<your acess token>"
}

Request Body
{name,category, price, description, imageUrl}

respon 201(create)
{
    "id": 3,
    "name": "bunga mawar",
    "category": "bunga hias dengan duri",
    "price": 250000,
    "description": "1x 1hari penyiraman",
    "imageUrl": "https://ik.imagekit.io/za3wmrmu9re/mawar_merah_C0TZDx6il5L.jpg",
    "UserId": 3,
    "updatedAt": "2021-10-22T01:14:55.666Z",
    "createdAt": "2021-10-22T01:14:55.666Z"
}

respon 400(Bad Request)
{
    "message": [
        null
    ]
}


### DELETE/plants/:id

Request Header

{
"access_token" : "<your acess token>"
}

Request Body
not needed

Req.params
<req.params.id>

respon (200)
{
"message": "sucess delete plant entertain"
}
respon (403)
{
"message": "authorized invalid"
}
respon(404)
### DELETE/news/:id

Request Header

{
"access_token" : "<your acess token>"
}

Request Body
not needed

Req.params
<req.params.id>

respon (200)
{
"message": "sucess delete plant <name_plant>"
}
respon (403)
{
"message": "authorized invalid"
}
respon (404)
{
    "message": "Tanaman tidak ditemukan"
}
respon (500)
{
"name": "Not Found"
}