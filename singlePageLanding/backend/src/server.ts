import { app } from './app'; // Adjust the import path as needed
require('dotenv').config();
import  connectDB from './database';

const port = process.env.PORT || 3010;

if(!process.env.DB_URI){
	console.log('environemnt file is not working')
}

if(process.env.NODE_ENV !== "test") {
	connectDB()
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
