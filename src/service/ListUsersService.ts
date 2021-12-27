import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repository/UserRepositories"
import { instanceToPlain } from "class-transformer";


export const ListUsersService = async () => {
    const userRepository = getCustomRepository(UserRepositories);

    const users = await userRepository.find();
    return instanceToPlain(users);
}