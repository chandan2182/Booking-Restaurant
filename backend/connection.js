const mongoose = require('mongoose');

const url ='mongodb+srv://chandanrawat60:123@cluster0.ekuvj55.mongodb.net/mydb?retryWrites=true&w=majority'


// asynchronous - reurn promise

mongoose.connect(url)

.then((result) => {
    console.log('database conneted sucessfully');
    
}).catch((err) => {
    console.log(err);
    
});
module.exports = mongoose;