import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

export const CreateComplimentController = async (request: Request, response: Response) => {
    const { user_receiver, tag_id, message } = request.body;

    const compliment = await CreateComplimentService( {user_sender: request.user_id, user_receiver, tag_id, message} );

    return response.json(compliment);
}