import { Request, Response } from "express";
import { CreateUserService } from "../service/createUserService";

export const CreateUserController = async (request: Request, response: Response) => {
    const { name, email, admin, password } = request.body;
    const user = await CreateUserService({ name, email, admin, password });

    return response.json(user);
}