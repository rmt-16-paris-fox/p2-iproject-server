# **mtthwsbuild server**

mtthwsbuild is an application to display my keyboard builds. You also can order and do payment via this website. This app has :

-   RESTful endpoint for asset's CRUD operation
-   JSON formatted response

&nbsp;

## **RESTful endpoints**

&nbsp;

---

### **POST /public/register**

> Create new user
> &nbsp;

_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
{
  "email" : <string>,
  "password" : <string>,
  "fullName" : <string>
}
```

&nbsp;

_Response (201 - New User Created)_

```
{
  "id" : <new user id>,
  "email" : <new user email>
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message" : [error messages]
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /public/login**

> Log in
> &nbsp;

_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
{
  "email" : <string>,
  "password" : <string>
}
```

&nbsp;

_Response (200 - Success)_

```
{
  "access_token" : <access token>,
  "role" : <user's role>,
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : "Invalid e-mail / password"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /public/login-google**

> Log in / Register with Google
> &nbsp;

_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
{
  "google_token" : <string>
}
```

&nbsp;

_Response (200 - Success)_

```
{
  "access_token" : <access token>,
  "role" : <user's role>,
}
```

&nbsp;

_Response (201 - Created)_

```
{
  "id" : <user's id>,
  "email" : <user's email>,
  "role" : <user's role>,
  "access_token" : <access token>
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /public/keyboards**

> Show paid & finished keyboards
> &nbsp;

_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
[
	{
		"id": <keyboard id>,
		"name": "<keyboard name>",
		"mountingStyle": "<keyboard mounting style>",
		"plateMaterial": "<keyboard plate material>",
		"keycaps": "<keyboard keycaps",
		"switches": "<keyboard keycaps>",
		"miscellaneous": "<keyboard miscellaneous>",
		"isDone": true,
		"isPaid": true,
		"UserId": <keyboard user id>,
		"ChargeId": <keyboard charge id>,
		"createdAt": "<keyboard created at>",
		"updatedAt": "<keyboard updated at>",
		"Images": [
      {
				"id": <image id>,
				"imageUrl": "<image url>",
				"KeyboardId": <keyboard id>,
				"createdAt": "<image created at>",
				"updatedAt": "<image updated at>"
			},
      etc
    ]
	},
  etc
]
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /public/keyboards/:id**

> Show paid & finished keyboard details
> &nbsp;

_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
{
  "id": <keyboard id>,
  "name": "<keyboard name>",
  "mountingStyle": "<keyboard mounting style>",
  "plateMaterial": "<keyboard plate material>",
  "keycaps": "<keyboard keycaps",
  "switches": "<keyboard keycaps>",
  "miscellaneous": "<keyboard miscellaneous>",
  "isDone": true,
  "isPaid": true,
  "UserId": <keyboard user id>,
  "ChargeId": <keyboard charge id>,
  "createdAt": "<keyboard created at>",
  "updatedAt": "<keyboard updated at>",
  "Images": [
    {
      "id": <image id>,
      "imageUrl": "<image url>",
      "KeyboardId": <keyboard id>,
      "createdAt": "<image created at>",
      "updatedAt": "<image updated at>"
    },
    etc
  ]
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message" : 'Invalid req.params'
}
```

&nbsp;

_Response (404 - Not Found)_

```
{
  message: 'Keyboard not found'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /public/videos**

> Fetch videos from Samuel Matthew's Youtube Channel
> &nbsp;

_Request Header_

```
Not needed
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
{
	"videoEmbeds": [<video urls>]
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /public/keyboards**

> Order a keyboard
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
{
  "name" : <string>,
  "mountingStyle" : <string>,
  "plateMaterial" : <string>,
  "keycaps" : <string>,
  "switches" : <string>,
  "miscellaneous" : <string>
}
```

&nbsp;

_Response (201 - Created)_

```
{
	"id": <keyboard id>,
	"name": "<keyboard name>",
	"keycaps": "<keyboard keycaps>",
	"switches": "<keyboard switches>",
	"miscellaneous": "<keyboard miscellaneous>",
	"isDone": false,
	"isPaid": false,
	"mountingStyle": "<keyboard mounting style>",
	"plateMaterial": "<keyboard plate material>",
	"UserId": <user id>,
	"updatedAt": "<keyboard updated at>",
	"createdAt": "<keyboard created at>",
	"ChargeId": null
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message" : [ <error messages> ]
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : "You must login first"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /public/ovo/charge**

> Send payment request to OVO via xendit
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
{
  "phoneNumber" : <string>,
  "keyboardId" : <number>
}
```

&nbsp;

_Response (200 - Success)_

```
{
	"id": "<charge id>",
	"business_id": "<business id>",
	"reference_id": "<order invoice id>",
	"status": "<payment staus>",
	"currency": "IDR",
	"charge_amount": 250000,
	"capture_amount": 250000,
	"refunded_amount": null,
	"checkout_method": "ONE_TIME_PAYMENT",
	"channel_code": "ID_OVO",
	"channel_properties": {
		"mobile_number": "<customer's phone number>"
	},
	"actions": null,
	"is_redirect_required": false,
	"callback_url": "https://mtthwsbuild-api.herokuapp.com/public/ovo/status",
	"created": "<charge created at>",
	"updated": "<charge updated at>",
	"void_status": null,
	"voided_at": null,
	"capture_now": true,
	"customer_id": null,
	"payment_method_id": null,
	"failure_code": null,
	"basket": null,
	"metadata": null
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message" : [ <error messages> ]
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : "You must login first"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /public/ovo/status**

> Accept callback from xendit about the payment status
> &nbsp;

_Request Header_

```
{
  "x-callback-token" : "<callback token>"
}
```

&nbsp;

_Request Body_

```
{
  "data": {
    "id": "<charge id>",
    "reference_id": "<order invoice id>",
    "status": "SUCCEEDED"
  }
}
```

&nbsp;

_Response (200 - Success)_

```
{
	"message": "Keyboard with id <keyboard id> is paid! ChargeId = <charge id>"
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message" : [ <error messages> ]
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : "You must login first"
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /public/my-keyboards**

> Show keyboards that been ordered by a specific user
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
[
	{
		"id": <keyboard id>,
		"name": "<keyboard name>",
		"mountingStyle": "<keyboard mounting style>",
		"plateMaterial": "<keyboard plate material>",
		"keycaps": "<keyboard keycaps",
		"switches": "<keyboard keycaps>",
		"miscellaneous": "<keyboard miscellaneous>",
		"isDone": <keyboard work status>,
		"isPaid": <keyboard payment status>,
		"UserId": <keyboard user id>,
		"ChargeId": <keyboard charge id>,
		"createdAt": "<keyboard created at>",
		"updatedAt": "<keyboard updated at>",
		"Images": [
      {
				"id": <image id>,
				"imageUrl": "<image url>",
				"KeyboardId": <keyboard id>,
				"createdAt": "<image created at>",
				"updatedAt": "<image updated at>"
			},
      etc
    ]
	},
  etc
]
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /public/user**

> Get user credentials
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
{
	"id": <user id>,
	"email": "<user email>",
	"name": "<user name>",
	"role": "<user role>"
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /admin/users**

> Get all user
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
[
	{
		"id": <user id>,
		"email": "<user email>",
		"password": "<user hashed password>",
		"fullName": "<user name>",
		"role": "<user role>",
		"createdAt": "<user created at>",
		"updatedAt": "<user updated at>"
	},
  etc
]
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "message" : 'You don't have permission to access'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **GET /admin/keyboards**

> Get all keyboards
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
Not needed
```

&nbsp;

_Response (200 - Success)_

```
[
	{
		"id": <keyboard id>,
		"name": "<keyboard name>",
		"mountingStyle": "<keyboard mounting style>",
		"plateMaterial": "<keyboard plate material>",
		"keycaps": "<keyboard keycaps",
		"switches": "<keyboard keycaps>",
		"miscellaneous": "<keyboard miscellaneous>",
		"isDone": <keyboard work status>,
		"isPaid": <keyboard payment status>,
		"UserId": <keyboard user id>,
		"ChargeId": <keyboard charge id>,
		"createdAt": "<keyboard created at>",
		"updatedAt": "<keyboard updated at>",
		"Images": [
      {
				"id": <image id>,
				"imageUrl": "<image url>",
				"KeyboardId": <keyboard id>,
				"createdAt": "<image created at>",
				"updatedAt": "<image updated at>"
			},
      etc
    ]
	},
  etc
]
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "message" : 'You don't have permission to access'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /admin/keyboards**

> Create a new keyboard
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
{
  "name": <string>,
  "mountingStyle": <string>,
  "plateMaterial": <string>,
  "keycaps": <string>,
  "switches": <string>,
  "miscellaneous": <string>,
  "isDone": <boolean>,
  "isPaid": <boolean>,
  "UserId": <number>,
}
```

&nbsp;

_Response (201 - Created)_

```
{
  "id": <keyboard id>,
  "name": "<keyboard name>",
  "mountingStyle": "<keyboard mounting style>",
  "plateMaterial": "<keyboard plate material>",
  "keycaps": "<keyboard keycaps",
  "switches": "<keyboard keycaps>",
  "miscellaneous": "<keyboard miscellaneous>",
  "isDone": <keyboard work status>,
  "isPaid": <keyboard payment status>,
  "UserId": <keyboard user id>,
  "ChargeId": <keyboard charge id>,
  "createdAt": "<keyboard created at>",
  "updatedAt": "<keyboard updated at>"
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message" : [ <error messages> ]
}
```

&nbsp;

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "message" : 'You don't have permission to access'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **PUT /admin/keyboards/:keybordId**

> Edit a keyboard
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
{
  "name": <string>,
  "mountingStyle": <string>,
  "plateMaterial": <string>,
  "keycaps": <string>,
  "switches": <string>,
  "miscellaneous": <string>,
  "isDone": <boolean>,
  "isPaid": <boolean>,
  "UserId": <number>,
}
```

&nbsp;

_Response (200 - Success)_

```
{
  "id": <keyboard id>,
  "name": "<keyboard name>",
  "mountingStyle": "<keyboard mounting style>",
  "plateMaterial": "<keyboard plate material>",
  "keycaps": "<keyboard keycaps",
  "switches": "<keyboard keycaps>",
  "miscellaneous": "<keyboard miscellaneous>",
  "isDone": <keyboard work status>,
  "isPaid": <keyboard payment status>,
  "UserId": <keyboard user id>,
  "ChargeId": <keyboard charge id>,
  "createdAt": "<keyboard created at>",
  "updatedAt": "<keyboard updated at>"
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message": [ <error messages> ]
}
```

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "message" : 'You don't have permission to access'
}
```

&nbsp;

_Response (404 - Not Found)_

```
{
  "message" : 'Keyboard not found'
  or
  "message" : 'User not found'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **POST /admin/keyboards/:keyboardId/images**

> Add images for a keyboard
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
{
  "images": <array>
}
```

&nbsp;

_Response (201 - Created)_

```
[
	{
		"id": <image id>,
		"imageUrl": "<image url>",
		"KeyboardId": <keyboard id>,
		"createdAt": "<image created at>",
		"updatedAt": "<image updated at>"
	},
  etc
]
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message": [ <error messages> ]
}
```

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "message" : 'You don't have permission to access'
}
```

&nbsp;

_Response (404 - Not Found)_

```
{
  "message" : 'Keyboard not found'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---

### **DELETE /admin/images**

> Delete image
> &nbsp;

_Request Header_

```
{
  "access_token" : "<access token>"
}
```

&nbsp;

_Request Body_

```
{
  "ImageId": <number>
}
```

&nbsp;

_Response (201 - Created)_

```
{
  "message": 'Image with id: <image id> is deleted'
}
```

&nbsp;

_Response (400 - Bad Request)_

```
{
  "message": 'Invalid req.params'
}
```

_Response (401 - Unauthorized)_

```
{
  "message" : 'You must login first'
}
```

&nbsp;

_Response (403 - Forbidden)_

```
{
  "message" : 'You don't have permission to access'
}
```

&nbsp;

_Response (404 - Not Found)_

```
{
  "message": 'Image not found'
}
```

&nbsp;

_Response (500 - Internal Server Error)_

```
{
  "message" : 'Internal Server Error'
}
```

&nbsp;

---
