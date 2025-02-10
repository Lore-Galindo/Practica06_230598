import mongoose from "mongoose";

// Connect to MongoDB

mongoose.connect('mongodb+srv://lorena01galindo:gatopepo21@sessions.zk8dm.mongodb.net/sessions_db?retryWrites=true&w=majority&appName=Sessions')
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

export default mongoose;

//mongodb+srv://lorena01galindo:gatopepo@sessions.zk8dm.mongodb.net/?retryWrites=true&w=majority&appName=Sessions