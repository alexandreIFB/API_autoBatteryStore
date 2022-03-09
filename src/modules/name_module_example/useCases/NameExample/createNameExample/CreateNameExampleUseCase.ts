import { injectable } from "tsyringe";

import { INameExampleRepository } from "../../../repositories/interfaces/INameExamplesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateNameExampleUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private nameExampleRepository: INameExampleRepository) { }

  execute({ name, description }: IRequest) {
    const nameExampleAlreadyExist = this.nameExampleRepository.findByName(name);

    if (nameExampleAlreadyExist) {
      throw new Error("NameExample already exists");
    }

    this.nameExampleRepository.create({ name, description });
  }
}

export { CreateNameExampleUseCase };
