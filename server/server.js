import express from 'express';
import dotenv from 'dotenv';
import connectDB, { addData } from './utils/db.js';
import adminRoute from "./routes/admin.auth.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
try {
  connectDB();
  // addData("SrkrCodingClub","srkrcodingclubofficial@gmail.com","srkrcc@official");
} catch (error) {
  console.error("Database connection failed:", error);
}


app.get('/', (req, res) => {
  res.send('Hello, World!');    
});

app.use(adminRoute);

app.listen(port , () => {
  console.log(`Server is running on http://localhost:${port}`);
});