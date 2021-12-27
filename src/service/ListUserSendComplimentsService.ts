import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repository/ComplimentRepositories";


export const ListUserSendComplimentsService = async (user_id: string) => {

    const complimentsRepository = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentsRepository.find({ 
        where: {
            user_sender: user_id
        }
    })
    return compliments;

}
