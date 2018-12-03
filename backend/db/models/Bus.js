const { mongoose, autoIncrement } = require('../mongo')

const busSchema = new mongoose.Schema({
    BusId: {
        type: Number,
        unique: true
    },BusType:{
        type:Number,
        unique: false
    },BusPrice:{
        type:Number,
        unique:false
    }
    /* ... */
})



module.exports = mongoose.model('Bus', busSchema)