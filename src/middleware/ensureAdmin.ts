import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repository/UserRepositories";

export const ensureAdmin = async (request: Request, response: Response, next: NextFunction) => {

    const {user_id} = request;

    const usersRepositories = getCustomRepository(UserRepositories);

    const {admin} = await usersRepositories.findOne(user_id);

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    });
}