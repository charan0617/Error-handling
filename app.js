const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

// Manual error using next()
app.get("/error", (req, res, next) => {
    const err = new Error("Something went wrong");
    err.status = 500;
    next(err); // Pass the error to the error handler
});

// Throw error in async context
app.get("/async-error", async (req, res, next) => {
    try {
        // Simulate async error
        await Promise.reject(new Error("Async route error"));
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});

// 404 route not found
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
    });
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
