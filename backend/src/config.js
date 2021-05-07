import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './utils/logger';

export default (app) => {
  app.disable('x-powered-by');  

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(morgan("dev"));

  app.use((err, req, res, next) => {
    logger.error( err.message );
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });

}