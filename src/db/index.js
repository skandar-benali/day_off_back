import { connect } from "mongoose";
import { runtimeVars } from "../configs";

const { DB } = runtimeVars;

const dbConnect = async () => {
  try {
    await connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.info("✅ connected to db");
  } catch (dbErr) {
    console.error("💀 database connection failure 💀");
    process.exit(1);
  }
};

export default dbConnect;
