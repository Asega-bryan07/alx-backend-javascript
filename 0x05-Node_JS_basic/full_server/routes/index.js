import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

/**
 * binds routes to the appropriate handler in an express application
 * @param {Express} app the express application
 */
const mapRoutes = (app) => {
    app.get('/', AppController.getHomepage);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;