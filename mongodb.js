// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID

// using destructrue
const {MongoClient, ObjectId} = require('mongodb') 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology:true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }
    //console.log('Connected successfully')

    // get the database name
    const db = client.db(databaseName)
    // get the collection name
    const collection = db.collection('users')

    // insert single document
    // collection.insertOne({
    //     name: 'Mannu',
    //     age: 21
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // insert multiple documents
    // db.collection('tasks').insertMany([
    //     {description: '1st Assignment', completed: true},
    //     {description: '2nd Assignment', completed: false},
    //     {description: 'Maths homework', completed: true}
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    // read single data
    // collection.findOne({ _id: new ObjectId('5d5fc51aa2a8983330454dac')}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')

    //     }
    //     console.log(user)
    // })
    // read multiple data and print it
    collection.find({age: {$gt: 19}}).toArray((error, users)=> {
        console.log(users)
    })

    // update single document using promises
    // collection.updateOne({
    //     _id: new ObjectId('5d5fcd711f9eb62ab0c88195')
    // },{
    //     $inc:{
    //         age: 1
    //     }
    //     // $set: {
    //     //     name: 'Mannu Kumar Tanti'
    //     // }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // update multiple document using promise method
    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // delete many documents
    // collection.deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    
    // delete single document
    db.collection('tasks').deleteOne({
        completed: false
    }).then((result) => {
        console.log(result.result)
    }).catch((error) => {
        console.log(error)
    })
})