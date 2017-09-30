const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
      res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});


//GET /todos/1234234
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
     if(!ObjectID.isValid(id)){
         return res.status(404).send();
     }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo})
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo)=> {
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todo})
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.listen((port),()=>{
    console.log(`Started up at port ${port}`);
});


module.exports = {app};








































// var newTodo = new Todo({
//     text:'Cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//    console.log('Saved todo', doc);
// },(e)=>{
//     console.log('Unable to save to do');
// });

// var newTodo = new Todo({
//
//     text:'   Edit this video   '
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo', doc);
// },(e)=>{
//     console.log('Unable to save todo', e);
// });

// var newUser = new User({
//     email:'   example@example.com       '
// });
//
// newUser.save().then((doc)=>{
//     console.log('Saved user', doc);
// },(e)=>{
//     console.log('Unable to save user',e);
// });
