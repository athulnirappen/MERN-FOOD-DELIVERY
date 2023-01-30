const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
MONGO_URL =
  "mongodb+srv://goodfood:goodfood@cluster0.t73mbsd.mongodb.net/?retryWrites=true&w=majority;"

const connectDb =async () => {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true }, (err, result) => {
        if (err) {
           console.log(err);
        } else {
          console.log("mongodb is connected");  
       }
        
    })
}

module.exports = connectDb;