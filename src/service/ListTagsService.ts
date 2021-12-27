import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repository/TagRepositories";
import { instanceToInstance } from "class-transformer";


export const ListTagsService = async () => {
    const tagsRepository = getCustomRepository(TagRepositories);

    const tags = await tagsRepository.find();


    return instanceToInstance(tags);
}