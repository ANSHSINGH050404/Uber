# User Registration Endpoint

## Endpoint: `users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, checks if the user already exists, hashes the password, creates a new user, generates an authentication token, and responds with the token and user details.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters.
  - `lastname`: A string with at least 3 characters (optional).
- `email`: A valid email address.
- `password`: A string with at least 6 characters.

Example:

````json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}


### Response:
The response will be a JSON object with the following fields:
- `token`: A JWT token for authentication.
- `user`: An object containing:
    - `id`: The unique identifier of the user.
    - `fullname`: An object containing:
        - `firstname`: The user's first name.
        - `lastname`: The user's last name.
    - `email`: The user's email address.

Example:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "1234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
````
# User Login  Endpoint
## Endpoint:`users/login Endpoint`
### Method: POST

### Description:
This endpoint authenticates users by verifying their credentials. Upon successful authentication, it generates a JWT token and returns the user information.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A valid email address
- `password`: The user's password

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
The response will be a JSON object containing:
- `token`: A JWT authentication token
- `user`: An object with the user's details

Example:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": "1234567890",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

# User Profile Endpoint

## Endpoint: `users/profile`

### Method: GET

### Description:
This endpoint retrieves the profile information of the authenticated user.

### Headers:
- `Authorization`: Bearer token required

### Response:
The response will be a JSON object containing the user's profile information:

```json
{
  "user": {
    "id": "1234567890",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

# User Logout Endpoint

## Endpoint: `users/logout`

### Method: POST

### Description:
This endpoint invalidates the user's current authentication token.

### Headers:
- `Authorization`: Bearer token required

### Response:
The response will be a JSON object with a success message:

```json
{
  "message": "Successfully logged out"
}
```
