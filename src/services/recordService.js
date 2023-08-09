const Record = require('../database/Record')

const getRecordForWorkout = (workoutID) => {
    try {
        const record = Record.getRecordForWorkout(workoutID);
        return record;
    } catch (error) {
        throw error;
    }
}


module.exports = { getRecordForWorkout}