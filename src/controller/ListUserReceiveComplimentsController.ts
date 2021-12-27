import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";


export const ListUserReceiveComplimentsController = async (request: Request, response: Response) => {

    const compliments = await ListUserReceiveComplimentsService(request.user_id);

    return response.json(compliments)
}