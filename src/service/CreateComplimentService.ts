import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repository/ComplimentRepositories";
import { UserRepositories } from "../repository/UserRepositories";

interface IComplimentRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
}

export const CreateComplimentService = async ({ user_sender, user_receiver, tag_id, message}: IComplimentRequest) => {
    const complimentRepository = getCustomRepository(ComplimentRepositories);

    const userRepository = getCustomRepository(UserRepositories);

    if (user_sender === user_receiver) {
        throw new Error("The message need to be send to another user.");
    }
    
    const userReceiverExists = await userRepository.findOne(user_receiver);
    
    if (!userReceiverExists) {
        throw new Error("User receiver not found.");
    }

    const compliment = complimentRepository.create({
        user_sender,
        user_receiver,
        tag_id,
        message
    });

    await complimentRepository.save(compliment);

    return compliment;
}