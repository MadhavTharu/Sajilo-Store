const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect("mongodb+srv://madhavtharu000:madhav@cluster0.yl4d806.mongodb.net/SajiloStore?retryWrites=true&w=majority&appName=Cluster0");

const UserRoutes = require('./routes/user_routes');
app.use("/api/user", UserRoutes);



const CategoryRoutes = require('./routes/category_routes');
app.use("/api/category", CategoryRoutes);

const ProductRoutes = require('./routes/product_routes');
app.use("/api/product", ProductRoutes);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

