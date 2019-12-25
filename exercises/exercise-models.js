const db = require('../database/db-config');

module.exports = {
   getAll,
   getUserExercises,
   addExercise,
   getExerciseById,
   updateExercise,
   deleteExercise
}

// Users can log in and can create, review, update, and delete data on their workouts.
function getAll() {
   return db('exercises');
}

function getUserExercises(userId) {
   // select u.username, e.id, e.name, e.anount_lifted, e.units, e.reps_completed, e.date, e.body_region  from exercises as e
   // join users as u
   // on e.user_id = u.id
   // where u.id = 2;
   
   return db('exercises as e')
      .join('users as u', "e.user_id", "=", "u.id")
      .select('e.id', 'e.user_id', 'e.name', 'e.amount_lifted', 'e.units', 'e.reps_completed', 'e.date', 'e.body_region')
      .where("e.user_id", userId);
}

function addExercise() {}
function getExerciseById() {}
function updateExercise() {}
function deleteExercise() {}