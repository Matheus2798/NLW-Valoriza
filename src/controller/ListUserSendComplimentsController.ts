import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";


export const ListUserSendComplimentsController = async (request: Request, response: Response) => {

    const compliments = await ListUserSendComplimentsService(request.user_id);

    return response.json(compliments)
}