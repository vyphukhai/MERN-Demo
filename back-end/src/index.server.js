const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const initialDataRouters = require('./routes/admin/initialData');
const pageRouters = require('./routes/admin/page');
const addressRouters = require('./routes/address');
const orderRouters = require('./routes/order');
const orderAdminRouters = require('./routes/admin/order.router')

env.config();

app.use(express.json());

//mongoose connecting
//mongodb+srv://admin:<password>@cluster0.9ayby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.9ayby.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    ).then(()=>{
        console.log('Database connected');
    });


app.use(cors());
app.use('/public/', express.static(path.join(__dirname, 'uploads')));
app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRouters);
app.use('/api',pageRouters);
app.use('/api',addressRouters);
app.use('/api',orderRouters);
app.use('/api',orderAdminRouters)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`);
});