# Backend API Documentation

### Register User — POST /users/register

## Description
Registers a new user account. Validates input, hashes the password, creates the user in MongoDB, and returns an auth token plus the created user object.

## Endpoint
- Method: POST
- URL: /users/register
- Headers: `Content-Type: application/json`

## Validation rules
- `email`: must be a valid email
- `fullname.firstname`: required, minimum 3 characters
- `password`: required, minimum 6 characters

## Request body (JSON)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secret123"
}
```

## Example Responses

- 200 OK
  - Description: User created successfully. Returns a JWT and the created user object (password excluded).
  - Example body:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "642c1f2b9a1e4d3f2c0a1b2c",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

- 400 Bad Request
  - Description: Validation failed for input fields. Returns an array of validation error objects.
  - Example body:

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    { "msg": "first name must be at least 3 characters long", "param": "fullname.firstname", "location": "body" }
  ]
}
```

- 500 Internal Server Error
  - Description: Unexpected server or database error.
  - Example body:

```json
{
  "message": "Internal Server Error"
}
```

## Example (curl)
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john@example.com","password":"secret123"}'

## Notes
- The password is hashed before storing (bcrypt). The created `user` object returned will not include the plaintext password (password field is stored with `select:false` in the schema).

---

# Login User — POST /users/login

## Description
Authenticates an existing user. Validates credentials and returns a JWT plus the user object on success.

## Endpoint
- Method: POST
- URL: /users/login
- Headers: `Content-Type: application/json`

## Validation rules
- `email`: must be a valid email
- `password`: required, minimum 6 characters

## Request body (JSON)
```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

## Responses

- 200 OK
  - Description: Authentication successful. Returns a JWT and the user object (password excluded).
  - Example body:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "642c1f2b9a1e4d3f2c0a1b2c",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  }
}
```

- 400 Bad Request
  - Description: Validation failed for input fields.
  - Example body:

```json
{ "errors": [ { "msg": "Invalid Email", "param": "email", "location": "body" } ] }
```

- 401 Unauthorized
  - Description: Invalid credentials (email not found or password mismatch).
  - Example body:

```json
{ "message": "Invalid email or password" }
```

- 500 Internal Server Error
  - Description: Unexpected server or database error.
  - Example body:

```json
{ "message": "Internal Server Error" }
```

## Example (curl)
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{"email":"john@example.com","password":"secret123"}'

---

# Get Profile — GET /users/profile

## Description
Returns the authenticated user's profile. Requires a valid JWT (sent as a cookie named `token` or an `Authorization: Bearer <token>` header).

## Endpoint
- Method: GET
- URL: /users/profile
- Auth: required (`authUser` middleware)

## Headers
- `Authorization: Bearer <token>` OR cookie `token=<jwt>`

## Responses

- 200 OK
  - Description: Returns the authenticated user's profile object.
  - Example body:

```json
{
  "_id": "642c1f2b9a1e4d3f2c0a1b2c",
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john@example.com",
  "socketId": null,
  "__v": 0
}
```

- 401 Unauthorized
  - Description: Missing, invalid, or blacklisted token.
  - Example body:

```json
{ "message": "Unauthorized" }
```

- 500 Internal Server Error
  - Description: Unexpected server or database error.
  - Example body:

```json
{ "message": "Internal Server Error" }
```

## Example (curl)
```bash
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <token>"
```

---

# Logout User — GET /users/logout

## Description
Invalidates the current auth token by adding it to a blacklist and clears the cookie. Requires authentication.

## Endpoint
- Method: GET
- URL: /users/logout
- Auth: required (`authUser` middleware)

## Responses

- 200 OK
  - Description: Token blacklisted and cookie cleared.
  - Example body:

```json
{ "message": "Logged out" }
```

- 401 Unauthorized
  - Description: Missing, invalid, or already blacklisted token.
  - Example body:

```json
{ "message": "Unauthorized" }
```

- 500 Internal Server Error
  - Description: Unexpected server or database error.
  - Example body:

```json
{ "message": "Internal Server Error" }
```

## Example (curl)
```bash
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer <token>"
```

