const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
MONGO_URL =
  "mongodb+srv://goodfood:goodfood@cluster0.t73mbsd.mongodb.net/goodfood?retryWrites=true"

const connectDb = async () => {
   try {
      await mongoose.connect(MONGO_URL, { useNewUrlParser: true }, () => {
         console.log("mongoDb is connected");
      });
      
   } catch (error) {
      console.log(error);
   }
   
}

module.exports = connectDb;