import { Request, Response } from "express";
import model from "./models";
import { users} from './array.user'

export async function getUsers(req: Request, res: Response): Promise <Response>{

    //return res.json(users);
    const users = await model.find();
    return res.json(users)
}

export async function getUserId(req: Request, res: Response): Promise <Response>{
    const id: string = req.params.id
    //let user = users.find(user => user.id ===id)
    const user = await model.findById(id);
    return res.json(user)
}

export function createUser(req: Request, res: Response): Response{
    let newuser = req.body;
    newuser.id = '' + (users.length +1);
    users.push(newuser);
    return res.json(newuser)
}