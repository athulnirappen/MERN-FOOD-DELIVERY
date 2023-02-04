const express = require("express");
const app = express()
const port = 5000;
const connectDb = require("./db")
const userRoutes = require("./routes/UserRoutes")
const cors = require("cors");
const Displaydata = require("./routes/Displaydata");
const OrderRoutes=require('./routes/Orderdata')




connectDb()

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


app.get('/', (req, res) => {
    res.send("hello")
})

app.use(express.json())
app.use('/api', userRoutes)
app.use("/api", Displaydata);
app.use("/api", OrderRoutes);




app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
})