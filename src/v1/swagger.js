const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");

// Metadata info sobre nuestra API
const options = {
    definition : {
        openapi: "3.0.0",
        info: { title: 'Crossfit WOD API', version: '1.0.0' },
        },
        apis: ['src/v1/routes/workoutRoutes.js', 'src/database/Workout.js'],
};

// Docs en JSON format
const swaggerSpec = swaggerJSDoc (options);

// Function to setup our Docs
const swaggerDocs = (app, port) =>{
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs/json', (req, res) =>{
        res.setHeader('Content-type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log(`Version 1 de los documentos estan en http://localhost:${port}/api/docs`)
};

module.exports = { swaggerDocs };