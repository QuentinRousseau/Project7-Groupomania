import helmet from "helmet";
import env from "../managers/env.js";

export default helmet(
  env.NODE_ENV === "production" ? {} : { contentSecurityPolicy: false }
);
