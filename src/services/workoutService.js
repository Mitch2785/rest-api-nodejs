const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = (filterParams) => {
    try {
        const allWorkouts = Workout.getAllWorkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw error;
    }
}
const createNeWorkout =(newWorkout)  => {
    const workoutToInsert = {
        ... newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" })
    }
    const createdWorkout = Workout.createNeWorkout(workoutToInsert);
    return createdWorkout;
}
const getOneWorkout =(workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
}
const updateOneWorkout =(workoutId, changes) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId,changes);

    return updatedWorkout;
}
const deleteOneWorkout =(workoutId) => {
    Workout.deleteOneWorkout(workoutId);
    return;
}

module.exports = {
    getAllWorkouts, createNeWorkout, getOneWorkout,updateOneWorkout,deleteOneWorkout
}