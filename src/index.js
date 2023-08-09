const express = require("express");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes")
const { swaggerDocs: v1SwaggerDocs } = require('./v1/swagger');

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

//app.use("/api/v1", v1Router);
app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () =>{
    console.log(`Servidor en puerto ${PORT}`);
    v1SwaggerDocs(app, PORT);
} );