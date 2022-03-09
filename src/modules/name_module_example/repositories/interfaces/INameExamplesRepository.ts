import { NameExample } from "../../model/NameExample";

interface ICreateNameExamplesDTO {
  name: string;
  description: string;
}

interface INameExampleRepository {
  create({ name, description }: ICreateNameExamplesDTO): void;
  findByName(name: string): NameExample;
  find(): NameExample[];
}

export { INameExampleRepository, ICreateNameExamplesDTO };
