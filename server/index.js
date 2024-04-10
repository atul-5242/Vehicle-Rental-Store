const express = require("express");
const app = express();

const userRoute = require("./routes/User");
const paymentRoute = require("./routes/Payments");

const VehicalRoute = require('./routes/Vehical');
// const courseRoute = require("./routes/Coures");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudnairyConnect} = require("./config/cloudnairy");
const fileUpload =require("express-fileupload");
const dotenv = require("dotenv");


dotenv.config();
const PORT = process.env.PORT || 5000;
console.log("Hello***************************")

// dataBase Connection.
database.connect();
// middlewares addition:
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["https://vehical-rental-store.vercel.app", "https://vehical-rental-store-indol.vercel.app"],
        credentials: true,
    })
)


// Allow requests from specific origins
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", ["https://vehical-rental-store.vercel.app", "https://vehical-rental-store-indol.vercel.app"]);
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });


app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tem",
    })
)

// Cloudinary Connection:
cloudnairyConnect();

// routes mounting:

app.use("/api/v1/auth",userRoute)
app.use("/api/v1/payment",paymentRoute)

app.use("/api/v1/Vehical",VehicalRoute)
// app.use("/api/v1/course",courseRoute)

// default route:
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is Up and Running..."
    })
})

app.listen(PORT,()=>{
    console.log(`App is running at : ${PORT}`);
});