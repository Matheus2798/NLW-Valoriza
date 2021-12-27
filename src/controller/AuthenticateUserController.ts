import { Request, Response } from "express";
import { AuthenticateUserService } from "../service/AuthenticateUserService";


export const authenticateUserController = async (request: Request, response: Response) => {
    const {email, password} = request.body;

    const token = await AuthenticateUserService({email, password})

    return response.status(200).json(token);
}