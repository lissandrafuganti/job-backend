import 'dotenv/config';
//import mongoose from 'mongoose'
console.log(process.env.MONGO_USER);
console.log(process.env.MONGO_PASSWORD);
console.log(process.env.MONGO_DB);

const initDB = () => {
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}-wfevb.mongodb.net/test?retryWrites=true&w=majority`,
        { useNewUrlParser: true }
      )
      
    mongoose.connection
    .on('error', error => console.log(error))    
    .once('open', () => {
        // const info = mongoose.connections[0];
        // console.log(`Connected to  ${info.host}:${info.port}/${info.name}`)     
        console.log('Connected to Database')   
    })
}

export default initDB;
