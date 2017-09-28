// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if(err){
     return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59cd00ddae78a9be81e69d83')
    // },{
    //   $set:{
    //       completed:true
    //   }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('59cba4e69081dd10784acab0')
    },{
        $set:{
            name:'Yarin'
        },
        $inc:{
           age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result)
    });


    // db.close();
});