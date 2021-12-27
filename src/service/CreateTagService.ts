import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repository/TagRepositories";


export const CreateTagService = async ( name: string ) => {
            
    const tagsRepository = getCustomRepository(TagRepositories);
    
    if (!name) {
        throw new Error("Name incorrect!");
    }
    
    const tagAlreadyExists = await tagsRepository.findOne({ name });
    if (tagAlreadyExists) {
        throw new Error("Tag already exists");
    }
    
    const tag = tagsRepository.create({
        name
    })

    await tagsRepository.save(tag);

    return tag;
    
}