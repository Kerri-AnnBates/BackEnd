# BackEnd

## API Routes
**Login route. POST request**
- https://bw-weight-lifting.herokuapp.com/api/auth/login

### Login User
Both username and password is required. A successful login returns a token. Token expires after an hour. After an hour, user will have to login again.

**Register user route. POST request**
- https://bw-weight-lifting.herokuapp.com/api/auth/register

### Register User
**__Example:__**
```javascript
{
   "username": "bilbo",
   "password": "walk"
}
```

**GET request to get user by id**
- https://bw-weight-lifting.herokuapp.com/api/users/:id

**__Example:__**
```javascript
{
  "id": 1,
  "username": "frodo",
  "password": "$2a$08$RwMDBSYDe81x2X3tRlONCe7ZlqBMmN/B13imcOC8xLp9atX4r24nC",
  "exercises": [
    {
      "id": 1,
      "user_id": 1,
      "name": "bench press",
      "amount_lifted": 120,
      "units": "lbs",
      "reps_completed": 3,
      "date": "",
      "body_region": "Chest"
    },
    {
      "id": 2,
      "user_id": 1,
      "name": "bicep curls",
      "amount_lifted": 70,
      "units": "lbs",
      "reps_completed": 3,
      "date": "",
      "body_region": "Biceps"
    },
    {
      "id": 7,
      "user_id": 1,
      "name": "squats",
      "amount_lifted": 180,
      "units": "lbs",
      "reps_completed": 3,
      "date": "2019-12-25 23:48:26",
      "body_region": "Legs"
    },
    {
      "id": 8,
      "user_id": 1,
      "name": "squats",
      "amount_lifted": 180,
      "units": "lbs",
      "reps_completed": 3,
      "date": "2019-12-25 23:48:46",
      "body_region": "Legs"
    },
    {
      "id": 9,
      "user_id": 1,
      "name": "squats",
      "amount_lifted": 180,
      "units": "lbs",
      "reps_completed": 3,
      "date": "2019-12-25 23:50:44",
      "body_region": "Legs"
    }
  ]
}
```

**GET request to get all exercises for a user**
- https://bw-weight-lifting.herokuapp.com/api/users/:id/exercises

This route will return all exercises that are created for the user with this specific id number.

**__Example:__**
```javascript
[
  {
    "id": 17,
    "user_id": 4,
    "name": "squats",
    "amount_lifted": 100,
    "units": "lbs",
    "reps_completed": 3,
    "date": "2019-12-27 01:05:51",
    "body_region": "Legs"
  },
  {
    "id": 18,
    "user_id": 4,
    "name": "bicep curls",
    "amount_lifted": 50,
    "units": "lbs",
    "reps_completed": 3,
    "date": "2019-12-27 01:06:44",
    "body_region": "Biceps"
  }
]
```

**POST request to add an exercise to a user's account**
- https://bw-weight-lifting.herokuapp.com/api/users/:id/exercises

By default, if `units` is not entered, it defaults to "lbs". If `date` is excluded, it will default to the current date and time that the exercise was created. `user_id` can be excluded, it is defaulted to the id in the url.

**PUT request to update an exercise by id**
- https://bw-weight-lifting.herokuapp.com/api/exercises/:id

**DELETE request delete an exercise by id**
- https://bw-weight-lifting.herokuapp.com/api/exercises/:id

---
## Database Schema
### Users
- id
- username (Required)
- password (Required)

### Exercises
- id
- user_id (Defaults to the id in url from `req.params.id`)
- name (Required)
- amount_lifted
- units (Defaults to "lbs" if not presented)
- reps_completed
- date (Defaults to date it was created if not filled in)
- body_region (Required)