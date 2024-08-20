import { connect } from "mongoose";

export async function startConnection() {
    await connect('mongodb+srv://testuser:1234@estudianteprueba.822mjnj.mongodb.net/?retryWrites=true&w=majority')
    .then(()=> console.log('Connected'))
}