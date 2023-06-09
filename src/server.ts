
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
async function fight() {
 
  try{
    await mongoose.connect(config.database_url as string)
    console.log(`database connection successfully`);
    app.listen(config.port, () =>{
      console.log(`the port is connected at port ${config.port}`)
    })
  }
  catch(err){
    console.log('server is not connected',err)
  }
  
}
fight();



