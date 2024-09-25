const express=require('express');
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));

const employeeRoute=require('./routes/employeesRoute')
app.use('/employees',employeeRoute);

require('dotenv').config();
const PORT=process.env.PORT

require('./db/connection')







app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})