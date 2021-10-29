// Express Modules
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Local PORT to host application || 4000 by default
const PORT = process.env.PORT || 4000;
const app = express(); // Express App
app.use(cors()) // Cross-Origin Resource Sharing
app.use(express.json()); // IMPORTANT for req.body!
app.use(morgan("tiny")); // Logger Middleware for http request errors

// Endpoints
app.get("/hello", (req, res) => res.status(200).json(req.body));

// Error Handling
app.get("*", (req, res) => res.status(404).json(
    "Error 404: This is an error. Please check your endpoints."
));
// Ready to listen on this port...
app.listen(PORT, () => console.log(`Standing by on PORT ${PORT}...`));