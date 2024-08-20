import {Schema, model, Document} from "mongoose"

const schemaEstudiante = new Schema ({
    "name": String,
    "lastName": String,
    "age": Number
});

interface InterfaceEstudiante extends Document {
    "name": string;
    "lastName": string;
    "age": number;
}

export default model<InterfaceEstudiante>("Estudiantes",schemaEstudiante)