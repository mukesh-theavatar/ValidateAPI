const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectID;

const userInput = new Schema({
    input: String,
    valid:{
        type: Boolean,
        default: false
    }
});
module.exports = userInput;