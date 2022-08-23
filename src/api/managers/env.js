import * as dotenv from "dotenv";
dotenv.config();

export default {
  ...dotenv.config({ path: ".env" }).parsed,
  ...dotenv.config({ path: ".env.local" }).parsed,
};
