const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
MONGO_URL =
  "mongodb+srv://goodfood:goodfood@cluster0.t73mbsd.mongodb.net/goodfood?retryWrites=true"

const connectDb = async () => {
   
      await mongoose.connect(MONGO_URL, { useNewUrlParser: true },async (err,result) => {
         if (err) console.log(err);
         else {
            console.log("Mongodb connected");
            const fetched_data = await mongoose.connection.db.collection('fooddata')
            fetched_data.find({}).toArray(async function (err, data) {
               const foodcategory = await mongoose.connection.db.collection('foodcategory')
               foodcategory.find({}).toArray(function (err, catData) {
                  if (err) console.log(err);
                  else {
                     global.fooddata = data;
                     global.foodcategory =catData;
                  }
               })
               
            })
         }
        
      });
      
   

   
   
}

module.exports = connectDb;