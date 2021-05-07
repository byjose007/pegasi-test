import mongoose from "mongoose";
import config from "./config/development";
import logger from "./utils/logger";



let uri =  config.MONGO_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conectado a MongoDB");
    logger.info( "Conectado a MongoDB" );
  })
  .catch(err => {
    console.error(err);
    logger.error( err );
  });