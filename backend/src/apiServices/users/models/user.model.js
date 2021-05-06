import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//nombre (input), apellido (input), edad (select), sexo (radio-button), embarazo o lactancia? (si - no, switch o radio button) fecha de nacimiento (date-picker), teléfono (input).

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    pregnancyOrBreastfeeding: {
        type: Boolean,
        required: true,
        default: false
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    telephone: {
        type: String,
        required: true
    }
});



export default mongoose.model('User', UserSchema);