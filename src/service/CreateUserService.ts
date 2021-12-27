import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repository/UserRepositories";
import { hash } from "bcryptjs"

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

export const CreateUserService = async ({ name, email, admin, password }: IUserRequest) => {
   
        const usersRepository = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("Email incorrect!");
        }

        if (!name) {
            throw new Error("Name incorrect!");
        }

        if (!password) {
            throw new Error("Password incorrect!");
        }        

        const userAlreadyExists = await usersRepository.findOne({ email });
        if (userAlreadyExists) {
            throw new Error("Email already exists");
        }

        const hashPassword = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: hashPassword
        })

        await usersRepository.save(user);

        return user;
    
}