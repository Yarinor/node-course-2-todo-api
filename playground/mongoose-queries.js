const  {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var userId = '59cd3e5e29d2634c32ed4a95';
// var id ='59ce99d1450bb570301720f9';
//
// if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) =>{
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e));
//

User.findById(userId).then((user)=>{
    if(!user){
        return console.log("User not found");
    }
    console.log('User By Id', user);
},(e)=>{
    console.log(e);
});

