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
