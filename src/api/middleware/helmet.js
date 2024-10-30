import helmet from "helmet";

export default helmet(
  process.env.NODE_ENV === "production" ? {} : { contentSecurityPolicy: false }
);
