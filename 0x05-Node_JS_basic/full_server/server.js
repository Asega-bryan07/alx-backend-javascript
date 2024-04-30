import express from "../7-http_express";
import mapRoutes from "./routes";

/**
 * a simple server serving routes in index.js
 */
const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

export default app;
module.exports = app;