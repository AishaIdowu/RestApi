# RestApi
# Person API Documentation

This REST API allows you to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Base URL](#base-url)

2. [Endpoints](#endpoints)
   - [Create a Person](#create-a-person)
   - [Retrieve a Person](#retrieve-a-person)
   - [Update a Person](#update-a-person)
   - [Delete a Person](#delete-a-person)

3. [Usage](#usage)
   - [Using Postman](#using-postman)

4. [Request and Response Formats](#request-and-response-formats)

5. [Error Handling](#error-handling)

## 1. Getting Started

### Base URL

The base URL for this API is `https://restapi-b202.onrender.com/api`. 


## 2. Endpoints

### Create a Person

- **Endpoint**: `POST /`
- **Description**: Create a new person.
- **Request Body**: JSON object with the following fields:
  - `name` (String, required): The name of the person.
- **Response**: JSON object representing the created person.

### Retrieve a Person

- **Endpoint**: `GET /:user_id`
- **Description**: Retrieve details of a person by ID.
- **Parameters**:
  - `user_id` (String, required): The unique ID of the person.
- **Response**: JSON object representing the retrieved person.

### Retrieve all Persons

- **Endpoint**: `GET /`
- **Description**: Retrieve details of all persons created.
- **Parameters**:
  - Requires just the endpoint
- **Response**: JSON object representing the retrieved persons.

### Update a Person

- **Endpoint**: `PUT /:user_id`
- **Description**: Modify details of an existing person by ID.
- **Parameters**:
  - `user_id` (String, required): The unique ID of the person.
- **Request Body**: JSON object with the following fields:
  - `name` (String): The updated name of the person.
- **Response**: JSON object representing the updated person.

### Delete a Person

- **Endpoint**: `DELETE /:user_id`
- **Description**: Remove a person by ID.
- **Parameters**:
  - `user_id` (String, required): The unique ID of the person.
- **Response**: JSON object representing the deleted person.

## 3. Usage

### Using Postman

You can interact with this API using Postman, by following these steps:

1. Open Postman.

2. Set the HTTP method (e.g., POST, GET, PUT, DELETE) for the desired operation.

3. Enter the API endpoint URL (e.g., `https://restapi-b202.onrender.com/api`) along with the endpoint path for the specific operation (e.g., `/1` for user ID 1).

4. Set the request headers (if needed) and the request body in JSON format as described in the [Request and Response Formats](#request-and-response-formats) section.

5. Click the "Send" button to make the API request.

6. Review the response in the Postman interface to see the result.

## 4. Request and Response Formats

### Request Format

- **POST /api**
  ```json
  {
    "name": "John Doe"
  }

- **PUT /api/:user_id**
   ```json

    {
      "name": "Updated Name"
    }

### Response Format
Success Response (for GET, POST, PUT, DELETE):
```json
{
  "_id": "user_id",
  "name": "John Doe"
}


