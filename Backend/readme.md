**Users Register Endpoint**

-**Endpoint:**
- POST /users/register

**HTTP Method:**
- POST

**Description:**
- Creates a new user account. Validates input, hashes the password, saves the user, and returns an authentication token and the created user (password excluded).

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
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepass"
}

**Validation Rules (as implemented):**
- `email` must be a valid email address.
- `fullname.firstname` must not be empty.
- `password` must be at least 6 characters long.
- Note: The service layer expects both `firstname` and `lastname` to be provided; omit neither.

**Success Response:**
- Status: 201 Created
- Body: JSON containing `token` (JWT) and `user` object (password omitted).

Example success response:

Status: 201

{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user-id>",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "socketId": null
  }
}

**Example Response (compact):**
- Status: 201 Created
{
  "token": "<jwt-token>",
  "user": {
    "_id": "<user-id>",
    "fullname": { "firstname": "Jane", "lastname": "Doe" },
    "email": "jane.doe@example.com",
    "socketId": null
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
- The created user model excludes the `password` field from default selects.
- The returned `token` is generated with the server's `JWT_SECRET` environment variable.

**Example curl:**

curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Jane","lastname":"Doe"},"email":"jane.doe@example.com","password":"securepass"}'

