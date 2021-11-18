const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();

const {constants} = require('./configs');
const {swaggerJson} = require('./docs');
const {userRouter} = require('./routers');

const app = express();

mongoose.connect(constants.MONGO_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.use('/users', userRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || enumStatus.SERVER_ERROR)
        .json({
            message: err.message,
        });
});

app.listen(constants.PORT, () => {
    console.log(`hostname ${constants.PORT}`);
});
