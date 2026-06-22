import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDb.js';
import userRouter from './routes/user.route.js';
import cartRouter from './routes/cartRoutes.js'
import productRouter from "./routes/product.route.js"
import addressRouter from './routes/address.route.js';
import orderRouter from './routes/order.route.js';
import { webhookStripe } from "./controllers/order.controller.js"
import consultationRoute from "./routes/consultation.route.js"

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());

app.post(
  "/api/order/webhook",
  express.raw({ type: "application/json" }),
  webhookStripe
)


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(morgan('dev'));
app.use(helmet({
    crossOriginResourcePolicy : false
}))
app.use("/api/cart", cartRouter)
app.use('/api/user', userRouter)
app.use("/api/product", productRouter)
app.use("/api/address", addressRouter)
app.use("/api/order", orderRouter)
app.use("/api/consultation", consultationRoute)

app.get("/", (request,response) =>{
    response.json({
        message: "Server is running" + process.env.PORT
    })
})



connectDB().then(() =>{
 app.listen(process.env.PORT, ()=> {
 console.log("Server is running", process.env.PORT);
 
 } )
})

