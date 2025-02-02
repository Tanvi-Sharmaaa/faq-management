import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {router} from './routes/faq.routes.js';
import AdminJS from "adminJS";
import AdminJSExpress from "@adminjs/express";
import { buildRouter } from '@adminjs/express';
import faq from './models/faq.model.js';



const app = express();

app.use(cors());
app.use(express.json());

console.log("Loading routes..."); // Debug log
app.use('/api/faqs', router);
console.log("Routes loaded successfully"); // Debug log


const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true,serverSelectionTimeoutMS: 5000, // Set to 5 seconds or more
         socketTimeoutMS: 45000  });
      console.log('MongoDB connected');

      // Start the server only after MongoDB connection is established
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
         console.log(`Server running on port ${PORT}`);
      });
   } catch (err) {
      console.log('MongoDB connection error:', err);
      process.exit(1); // Stop the server if MongoDB connection fails
   }
};

// Connect to the database and start the server
connectDB();
    

//Setup AdminJS
const adminJs = new AdminJS({
  resources: [faq], // The resources we want to manage through the admin panel (FAQ model)
   rootPath: '/admin',
});
 
// Build AdminJS router
const adminRouter = buildRouter(adminJs);
 
// Setup AdminJS panel
app.use(adminJs.options.rootPath, adminRouter);

export default app;

