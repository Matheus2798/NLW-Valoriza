import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entity/Tag";


@EntityRepository(Tag)
export class TagRepositories extends Repository<Tag> { }

