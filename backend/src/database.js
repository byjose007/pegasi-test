
import mongoose from "mongoose";

let uri = 'mongodb://localhost:27017/pegasi_db';
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
  })
  .catch(err => {
    console.error(err);
  });