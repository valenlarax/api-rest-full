import  { configureUserRouter} from "./user-router.js";
import { configureLoginRouter } from "./login_router.js";

export function configureRouters(app) {
    console.log("Configurando rutas principales...");
    const userRouter = configureUserRouter();
    const loginRouter = configureLoginRouter();
    app.use("/users", userRouter);
    app.use("/login", loginRouter);
}