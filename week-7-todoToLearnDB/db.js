const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect("mongodb+srv://niteshsengar9831:oPNhUMViFEWtLWfV@cluster0.dtw65.mongodb.net/todo-basic-test")

const User = new Schema({
    name:String,
    email:{type:String,unique:true}, 
    password:String,
})

const Todo = new Schema({
    userId: ObjectId,
    title:String,
    done:Boolean
})

// user collection mein with help of UserModel User type ka data daal do
// which means user is collection in database where you will be storing data
// and User is a schema
// and UserModel ke help se you can add or delet data 
// this is model in mongodb
const UserModel = mongoose.model('users',User);
const TodoModel = mongoose.model('todos',Todo);

module.exports = {
    UserModel:UserModel,
    TodoModel:TodoModel
}
