import { addDependency } from "./dependency.js";

import { UserService } from "./services/user-service.js";
import AutoService from "./services/autosService.js";

import user_mongo from "./repositories/user-mongo.js";
import autoRepository from "./repositories/autoRepository.js";

addDependency("userRepository", user_mongo);
addDependency("autoRepository", autoRepository);

addDependency("userService", new UserService());
addDependency("autoService", new AutoService());
