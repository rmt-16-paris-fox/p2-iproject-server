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

## Recipes RESTful Endpoints

### POST /recipes

> Search all recipes by name

_Request Header_

```
Not needed
```

_Request Body_

```
{
  "name": "string",
  "minCal": "integer",
  "maxCal": "integer",
  "diet": "array",
  "mealType": "array",
  "time": "integer"
}
```

_Response (200 - List Recipes)_

```
[
  {
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d2fe0d280de91cd9cd5f3781fc5441a3",
    "label": "Skirt Steak and Hanger Steak",
    "image": "https://www.edamam.com/web-img/28e/28e26b8817b74263d70dd9480c112d83.jpg",
    "yield": 2,
    "dietLabels": [
        "Low-Carb"
    ],
    "ingredientLines": [
        "5 to 6 ounces skirt steak or hanger steak",
        "Salt",
        "Mild-tasting olive oil, to coat, or as needed"
    ],
    "calories": 322.79424739061506,
    "totalWeight": 158.72957639384703,
    "totalTime": 0.5,
    "cuisineType": [
        "south american"
    ],
    "mealType": [
        "lunch/dinner"
    ]
  },
]
```

_Response (400 - Bad Request)_

```
{
  "message": [
    "Recipe name is required"
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

### GET /recipes/recipeDetail/:recipeId

> Get one specific recipe by id

_Request Header_

```
Not needed
```

_Request Body_

```
Not needed
```

_Response (200 - Recipe Detail)_

```
{
  "uri": <recipe uri>,
  "label": <recipe name / label>,
  "image": <recipe image>,
  "url": <recipe url>,
  "yield": <recipe serving amount>,
  "dietLabels": <recipe diet label>,
  "healthLabels": <recipe health label>
  "cautions": <recipe cautions>,
  "ingredientLines": <recipe ingredients>,
  "ingredients": <recipe ingredients detail>,
  "calories": <recipe total calories>,
  "totalWeight": <recipe total weight>,
  "totalTime": <recipe time cook>,
  "cuisineType": <recipe cuisineType>,
  "mealType": <recipe mealType>,
  "dishType": <recipe dishType>
  "totalNutrients": <recipe total nutrients>,
  "totalDaily": <recipe total daily>,
  "digest": <recipe digest>
}
```

_Response (404 - Recipe Not Found)_

```
{
  "message": "Recipe not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### GET /recipes/recipeAvgRate/:recipeId

> Get one average rate specific recipe by id

_Request Header_

```
Not needed
```

_Request Body_

```
Not needed
```

_Response (200 - Recipe Average Rate)_

```
{
  "avg": 4.666666666666667,
  "count": 3
}
```

_Response (404 - Recipe Not Found)_

```
{
  "message": "Recipe not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

//NEED AUTHN

### GET /recipes/myRecipes

> Get all favorite recipes

_Request Header_

```
{
  "access_token": <access_token>
}
```

_Request Body_

```
Not needed
```

_Response (200 - Favorite Recipes)_

```
[
  {
    "id": 18,
    "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
    "label": "Chicken Vesuvio",
    "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
    "yield": 4,
    "dietLabels": [
        "Low-Carb"
    ],
    "ingredientLines": [
      "1/2 cup olive oil",
      "5 cloves garlic, peeled",
      "2 large russet potatoes, peeled and cut into chunks",
      "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
      "3/4 cup white wine",
      "3/4 cup chicken stock",
      "3 tablespoons chopped parsley",
      "1 tablespoon dried oregano",
      "Salt and pepper",
      "1 cup frozen peas, thawed"
    ],
    "calories": 4228.043058200812,
    "totalWeight": 2976.8664549004047,
    "totalTime": 60,
    "cuisineType": [
        "american"
    ],
    "mealType": [
        "lunch/dinner"
    ]
  },
]
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### POST /recipes/myRecipes/:recipeId

> Add one recipe to favorite recipes

_Request Header_

```
{
  "access_token": <access_token>
}
```

_Request Body_

```
Not needed
```

_Response (201 - New Recipe Favorite Added)_

```
{
  "id": <myrecipe id>,
  "recipe": "<recipe name / label>"
}
```

_Response (400 - Already in favorite)_

```
{
  "message": "This recipe is already in your recipe list"
}
```

_Response (404 - Recipe Not Found)_

```
{
  "message": "Recipe not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### DELETE /recipes/myRecipes/:recipeId

> Delete one specific recipe form favorite recipes

_Request Header_

```
{
  "access_token": <access_token>
}
```

_Request Body_

```
Not needed
```

_Response (201 - New Recipe Favorite Added)_

```
{
  "message": "success deleted from your recipes"
}
```

_Response (404 - Recipe Not Found)_

```
{
  "message": "Recipe not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### GET /recipes/recipeMyRate/:recipeId

> Get user's recipe rate

_Request Header_

```
{
  "access_token": <access_token>
}
```

_Request Body_

```
Not needed
```

_Response (200 - Recipe Rate By User)_

```
{
  "id": <recipe rate id>,
  "UserId": <user id>,
  "RecipeId": <recipe id>,
  "rate": <amount rate>,
  "createdAt": <rate recipe created timestamp>,
  "updatedAt": <rate recipe created timestamp>
}
```

_Response (404 - Recipe Not Found)_

```
{
  "message": "Recipe not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### POST /recipes/rateRecipe

> Add rate user to one specific recipe

_Request Header_

```
{
  "access_token": <access_token>
}
```

_Request Body_

```
{
  "recipeId": <recipe id>,
  "rate": <rate by user>,
  "recipeName": <recipe name by system>
}
```

_Response (201 - Add Rate By User To One Specific Recipe)_

```
{
  "message": "added",
  "recipe": <recipe name>
}
```

_Response (200 - Update Rate By User To One Specific Recipe)_

```
{
  "message": "updated",
  "recipe": <recipe name>
}
```

_Response (404 - Recipe Not Found)_

```
{
  "message": "Recipe not found"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;

### POST /recipes/sendRecipes

> Send some recipes to user email by filter

_Request Header_

```
{
  "access_token": <access_token>
}
```

_Request Body_

```
{
  "name": "string",
  "minCal": "integer",
  "maxCal": "integer",
  "diet": "array",
  "mealType": "array",
  "time": "integer"
}
```

_Response (200 - Success Sent Recipes To Email User)_

```
{
  "message": "Email sent, thank you for using our app, please check your email periodically",
}
```

_Response (400 - Failed Send Email)_

```
{
  "message": "Failed send to your email, try again later"
}
```

_Response (500 - Internal Server Error)_

```
{
  "message": 'Internal Server Error'
}
```

&nbsp;
