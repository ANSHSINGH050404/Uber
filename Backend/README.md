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
