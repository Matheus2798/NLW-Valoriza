import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

export const CreateTagController = async (request: Request, response: Response) => {
    const { name } = request.body;
    const tag = await CreateTagService(name);

    return response.json(tag);
}