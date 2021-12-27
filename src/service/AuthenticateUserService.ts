import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepositories } from "../repository/UserRepositories";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

export const AuthenticateUserService = async ({email, password}: IAuthenticateRequest) => {
    const usersRepository = getCustomRepository(UserRepositories);

    const user = await usersRepository.findOne({ email })

    if (!user)
        throw new Error("E-mail/Password incorrect");

    const passwordValidate = await compare(password, user.password)
    
    if (!passwordValidate) {
        throw new Error("E-mail/Password incorrect");
    }

    const token = sign({
        email: user.email,
    }, "ee1962683c4489251b2928267d9d7f74", {
        subject: user.id,
        expiresIn: "1d"
    })

    return token;

}


//Sempre que o método retornar uma Promisse, utiliza-se o await.
//Colocar o secret em uma variavel de ambiente.
//Refresh token.