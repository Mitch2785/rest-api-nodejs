const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) =>{
    const {
        params: {workoutId},
    } = req;

    console.log("workoutId");

    if (!workoutId) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "parametro ':workoutId' no se puede leer"}
        });
        return;
        
    }
    try {
        const record = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: record});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILER",data: { error: "parametro ':workoutId' no se puede leer"} });

    }
}

module.exports= { getRecordForWorkout}