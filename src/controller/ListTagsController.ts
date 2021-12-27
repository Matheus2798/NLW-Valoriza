import { Request, Response } from "express";
import { ListTagsService } from "../service/ListTagsService";


export const ListTagsController = async (request: Request, response: Response) => {

    const tags = await ListTagsService();
    return response.json(tags);
}