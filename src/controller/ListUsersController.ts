import { Request, Response } from "express";
import { ListUsersService } from "../service/ListUsersService";


export const ListUsersController = async (request: Request, response: Response) => {
    const users = await ListUsersService();
    return response.json(users);
}