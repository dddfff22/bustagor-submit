const { mongoose, autoIncrement } = require('../mongo')

const terminalSchema = new mongoose.Schema({
    TerminalId: {
        type: Number,
        unique: true
    },TerminalName:{
        type: String,
        unique: false
    }
})


module.exports = mongoose.model('Terminal', terminalSchema)
