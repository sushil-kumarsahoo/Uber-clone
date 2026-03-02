**Users Register Endpoint**

-**Endpoint:**
- POST /users/register

**HTTP Method:**
- POST

**Description:**
- Creates a new user account. Validates input, hashes the password, saves the user, and returns an authentication token and the created user (the response may include the hashed `password` and `__v`).

**Headers:**
- Content-Type: application/json

**Request Body:**
- JSON object with the following fields (all required):
  - `fullname` (object)
    - `firstname` (string) — required
    - `lastname` (string) — required
  - `email` (string) — required, must be a valid email address
  - `password` (string) — required, minimum 6 characters

Example request body:

{
  "fullname": {
    "firstname": "<first-name>",
    "lastname": "<last-name>"
  },
  "email": "<user-email>",
  "password": "<password>"
}

**Validation Rules (as implemented):**
- `email` must be a valid email address.
- `fullname.firstname` must not be empty.
- `password` must be at least 6 characters long.
- Note: The service layer expects both `firstname` and `lastname` to be provided; omit neither.

**Success Response:**
- Status: 201 Created
- Body: JSON containing `token` (JWT) and `user` object (password omitted).

Example success response (actual format):

Status: 201

{
  "token": "<jwt-token>",
  "user": {
    "fullname": {
      "firstname": "<first-name>",
      "lastname": "<last-name>"
    },
    "_id": "<user-id>",
    "email": "<user-email>",
    "password": "<hashed-password>",
    "__v": "<version>"
  }
}

**Example Response (compact):**
- Status: 201 Created
{
  "token": "<jwt-token>",
  "user": {
    "fullname": { "firstname": "<first-name>", "lastname": "<last-name>" },
    "_id": "<user-id>",
    "email": "<user-email>",
    "password": "<hashed-password>",
    "__v": "<version>"
  }
}

**Client Error Responses:**
- 400 Bad Request
  - Returned when validation fails. Body contains an `errors` array from `express-validator` with details about the failing fields.

Example 400 response:

Status: 400

{
  "errors": [
    { "msg": "Please enter a valid email address", "param": "email", "location": "body" },
    { "msg": "First name is required", "param": "fullname.firstname", "location": "body" }
  ]
}

**Server Error:**
- 500 Internal Server Error
  - Returned when an unexpected server-side error occurs (e.g., DB error). Body typically contains an error message.

**Notes / Implementation Details:**
- Passwords are hashed before being stored (bcrypt).
- Although the `password` is hashed, this API currently returns the hashed `password` and the Mongoose `__v` field in the user object.
- The returned `token` is generated with the server's `JWT_SECRET` environment variable.

**Example curl:**

curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"<first-name>","lastname":"<last-name>"},"email":"<user-email>","password":"<password>"}'

---

**Users Login Endpoint**

- **Endpoint:**
- POST /users/login

**HTTP Method:**
- POST

**Description:**
- Authenticates a user using email and password. On success, returns a JWT token and the authenticated user. The response may include the hashed `password` and the Mongoose `__v` field; `socketId` is excluded from the response.

**Headers:**
- Content-Type: application/json

**Request Body:**
- JSON object with the following fields (all required):
  - `email` (string) — required, must be a valid email address
  - `password` (string) — required

Example request body:

{
  "email": "<user-email>",
  "password": "<password>"
}

**Validation Rules (as implemented):**
- `email` must be a valid email address.
- `password` must be present (non-empty).

**Success Response:**
- Status: 200 OK
- Body: JSON containing `token` (JWT) and `user` object. Note: the returned user may include the hashed `password` and `__v`, and does not include `socketId`.

Example success response (actual format):
- Status: 200 OK

{
  "token": "<jwt-token>",
  "user": {
    "fullname": { "firstname": "<first-name>", "lastname": "<last-name>" },
    "_id": "<user-id>",
    "email": "<user-email>",
    "password": "<hashed-password>",
    "__v": "<version>"
  }
}

**Client Error Responses:**
- 400 Bad Request
  - Returned when validation fails. Body contains an `errors` array from `express-validator` with details about the failing fields.
- 401 Unauthorized
  - Returned when credentials are invalid (wrong email or password). Body typically contains an error message like `{ "message": "Invalid credentials" }`.

**Server Error:**
- 500 Internal Server Error
  - Returned when an unexpected server-side error occurs (e.g., DB error). Body typically contains an error message.

**Example curl:**

curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"<user-email>","password":"<password>"}'

