import { addDependency } from "./dependency.js";

import { UserService } from "./services/user-service.js";
import AutoService from "./services/autosService.js";

import { SessionServices } from "./services/session_services.js";
import { LoginService } from "./services/login_service.js";



import user_mongo from "./repositories/user-mongo.js";
import autoRepository from "./repositories/autoRepository.js";

addDependency("userRepository", user_mongo);
addDependency("autoRepository", autoRepository);

addDependency("userService", new UserService());
addDependency("autoService", new AutoService());

addDependency("sessionServices", new SessionServices());
addDependency("loginService", new LoginService());  