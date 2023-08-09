const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) =>{
    const { mode } = req.query;
    try{
        const allWorkouts = workoutService.getAllWorkouts({ mode });
        res.send({ status: "OK" , data : allWorkouts});
    }catch(error){
        res
            .status(error?.status || 500)
            .send( { status: "FAILED", data: {message: error?.message || error} });
    }
    
    //res.send("muestra todos los workouts");
};

const getOneWorkout = (req, res) =>{
    const {params: { workoutId }} = req;

    if(!workoutId){
        return;
    }
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK" , data : workout});
    //const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
    //res.send(`optienes workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) =>{
    const { body } = req;
    if(!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips){
        res.status(400).send({ status: "FAILED", data: {error: "Un elemento está fallando o está incompleto:'name', 'mode','equipment','exercises','trainerTips'"} });
    }

    const newWorkout ={
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
        
    };
    try{
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({ status: "OK" , data : createdWorkout});
    }catch(error){
        res
            .status(error?.status || 500)
            .send( { status: "FAILED", data: {message: error?.message || error} });
    }
    
    
    //res.send(`creas workout ${req.params.workoutId}`);
};

const updateOneWorkout = (req, res) =>{
    const { body ,params: { workoutId }}  = req;

    if(!workoutId){
        res.status(400).send({status: "FAILED", data: {error: "Parametro ':workoutId' no puede estar vacio"}})
    }
    try{
        const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
        res.status.send({ status: "OK" , data : updatedWorkout});
    }catch(error){
        res
            .status(error?.status || 500)
            .send( { status: "FAILED", data: {message: error?.message || error} });
    }
    
    //res.send(`actualizas workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) =>{
    const { body ,params: { workoutId }}  = req;
    if(!workoutId){
        res.status(400).send({status: "FAILED", data: {error: "Parametro ':workoutId' no puede estar vacio"}})
    }
    try{
        workoutService.deleteOneWorkout(workoutId);
        res.status(204).send({ status: "OK" });
    }catch(error){
        res
            .status(error?.status || 500)
            .send( { status: "FAILED", data: {message: error?.message || error} });
    }
   
    //res.send(`eliminas workout ${req.params.workoutId}`);
};

module.exports ={
    getAllWorkouts,createNewWorkout,getOneWorkout,updateOneWorkout,deleteOneWorkout
};