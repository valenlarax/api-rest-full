import { addDependency } from "./dependency.js";

import { UserService } from "./services/user-service.js";
import user_mongo from "./repositories/user-mongo.js";

addDependency("userRepository", user_mongo);
addDependency("userService", new UserService());