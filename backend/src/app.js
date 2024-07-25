const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const cors = require("cors");
const app = express();
app.use(
    cors({
        origin: "*",
        credentials: true,
        // methods: "GET, POST, PUT, DELETE",
        // // allowedHeaders: "*",
        // allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'X-Custom-Header']
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.use(cookieParser());

app.use((req, res, next) => {
    next();
});

// import routes
// const userRouter = require('./routes/user.routes.js');
// const eventRouter =require('./routes/event.routes.js');
// const teamRouter =require('./routes/team.routes.js');

// routes declaration
// app.use("/api/users", userRouter);
// app.use("/api/events", eventRouter);
// app.use("/api/teams", teamRouter);


// 404 Error Handler


module.exports = { app };