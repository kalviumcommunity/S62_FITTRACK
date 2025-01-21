const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    date: {
      type: String,
      required: true,
    },
    workoutType: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, 
      required: true,
    },
    caloriesBurned: {
      type: Number,
      required: true,
    },
  });

  const dailyGoalsSchema = new mongoose.Schema({
    caloriesGoal: {
      type: Number,
      required: true,
    },
    stepsGoal: {
      type: Number,
      required: true,
    },
  });

const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    workouts: {
        type: [workoutSchema],
        default: [],
    },
    dailyGoals: {
        type: dailyGoalsSchema,
        required: true,
    },
});

module.exports = mongoose.model('User',userSchema, 'Users');