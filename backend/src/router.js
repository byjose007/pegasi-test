import userRoutes from './apiServices/users/routes/users.routes'
export default (app) => {

  
  app.use('/api', userRoutes);
  
  app.use('/', (req, res) => {
    res.json({message: "Welcome to PEGASI."})
  });
}