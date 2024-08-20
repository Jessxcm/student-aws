import { startConnection } from "./database"
import {APIGatewayProxyResult } from "aws-lambda"
import models from "./models";

async function consultarEstudiante(event: any): Promise<APIGatewayProxyResult> {
    startConnection();
    const users = await models.find();

    let response:APIGatewayProxyResult ={
        statusCode: 200,
        body: JSON.stringify(users)
    }
    return response
}

