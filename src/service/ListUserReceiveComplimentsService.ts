import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repository/ComplimentRepositories";


export const ListUserReceiveComplimentsService = async (user_id: string) => {
    const complimentsRepository = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentsRepository.find({ 
        where: {
            user_receiver: user_id
        }
    })
    return compliments;

}