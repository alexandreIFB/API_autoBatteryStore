import { AppError } from "../../../../errors/AppError";
import { CollaboratorsRepositoryInMemory } from "../../repositories/in-memory/CollaboratorsRepositoryInMemory";
import { CreateCollaboratorsUseCase } from "./CreateCollaboratorUseCase";

let createCollaboratorsUseCase: CreateCollaboratorsUseCase;
let collaboratorsRepositoryInMemory: CollaboratorsRepositoryInMemory;

describe("Create Collaborator", () => {
  beforeEach(() => {
    collaboratorsRepositoryInMemory = new CollaboratorsRepositoryInMemory();
    createCollaboratorsUseCase = new CreateCollaboratorsUseCase(
      collaboratorsRepositoryInMemory
    );
  });

  it("should be able to create a new collaborator", async () => {
    const collaboratorParams = {
      name: "Alexandre Abreu",
      telNumber: "61991935209",
      password: "xandin1234",
      cpf: "421455161",
    };

    await createCollaboratorsUseCase.execute(collaboratorParams);

    const collaboratorCreated = await collaboratorsRepositoryInMemory.findOne(
      collaboratorParams.cpf
    );

    expect(collaboratorCreated).toHaveProperty("id");
  });

  it("should not be able to create a new collaborator with CPF already registered", async () => {
    expect(async () => {
      const collaboratorParams = {
        name: "Alexandre Abreu",
        telNumber: "61991935209",
        password: "xandin1234",
        cpf: "421455161",
      };

      await createCollaboratorsUseCase.execute(collaboratorParams);

      await createCollaboratorsUseCase.execute(collaboratorParams);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a two new collaborator", async () => {
    const collaboratorParamsOne = {
      name: "Alexandre Abreu",
      telNumber: "61991935209",
      password: "xandin1234",
      cpf: "421455161",
    };

    const collaboratorParamsTwo = {
      name: "Aderi Abreu",
      telNumber: "61991280692",
      password: "aderi1234",
      cpf: "521455161",
    };
    await createCollaboratorsUseCase.execute(collaboratorParamsOne);

    await createCollaboratorsUseCase.execute(collaboratorParamsTwo);

    const collaboratorCreatedOne =
      await collaboratorsRepositoryInMemory.findOne(collaboratorParamsOne.cpf);

    const collaboratorCreatedTwo =
      await collaboratorsRepositoryInMemory.findOne(collaboratorParamsTwo.cpf);

    expect(collaboratorCreatedOne).toHaveProperty("id");
    expect(collaboratorCreatedTwo).toHaveProperty("id");
  });
});
