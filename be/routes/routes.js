import signUpRouter from "./client/SignUpRoutes.js";

const routes = (app) => {

    app.use("/client/dang-ky", signUpRouter);
    
}

export default routes;
