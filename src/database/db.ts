// Require MongoDB
import mongoose from 'mongoose';

// Start connection
mongoose.connect(process.env.DB_HOST).then(function (e){
    console.log('Connected to MongoDB! 😃🔥');
}).catch(function (e){
    console.error('Failed to connect to MongoDB 😕💥 ');
});
