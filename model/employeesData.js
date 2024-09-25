const mongoose=require('mongoose'); 

const employeeSchema=mongoose.Schema({
    "employeeName":String,
    "employeeDesignation":String,
    "employeeLocation":String,
    "salary":Number
})
//cbncvb
const employeesData=mongoose.model('employee',employeeSchema);
module.exports=employeesData