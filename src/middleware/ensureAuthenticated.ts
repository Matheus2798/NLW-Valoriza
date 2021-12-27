import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export const ensureAuthenticated = async (request: Request, response: Response, next: NextFunction) => {

    const authToken = request.headers.authorization;
  
    if (!authToken)
        return response.status(401).end();

    const [, token] = authToken.split(" ");
    try {
        const {sub} = verify(token, "ee1962683c4489251b2928267d9d7f74") as IPayload;
        
        request.user_id = sub;

        return next();
    } catch(err) {
        return response.status(401).end()
    }
    


}