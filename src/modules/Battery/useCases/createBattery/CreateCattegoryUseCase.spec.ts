import { AppError } from "../../../../errors/AppError";
import { BatteriesRepositoryInMemory } from "../../repositories/in-memory/BatteriesRepositoryInMemory";
import { CreateBatteryUseCase } from "./CreateBatteryUseCase";

let createBatteryUseCase: CreateBatteryUseCase;
let batteriesRepositoryInMemory: BatteriesRepositoryInMemory;

describe("Create Battery", () => {
  beforeEach(() => {
    batteriesRepositoryInMemory = new BatteriesRepositoryInMemory();
    createBatteryUseCase = new CreateBatteryUseCase(
      batteriesRepositoryInMemory
    );
  });

  it("should be able to create a new battery", async () => {
    const batteryParams = {
      c20_ah: 40,
      cca_a: 260,
      code: "M40SD/M40SE",
      polarity: "D/E",
      rc_min: 55,
      warrantly_m: 18,
    };

    await createBatteryUseCase.execute(batteryParams);

    const batteryCreated = await batteriesRepositoryInMemory.findOneByParams(
      batteryParams
    );

    expect(batteryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new battery with all parameters identical to one already registered", async () => {
    expect(async () => {
      const batteryParams = {
        c20_ah: 40,
        cca_a: 260,
        code: "M40SD/M40SE",
        polarity: "D/E",
        rc_min: 55,
        warrantly_m: 18,
      };

      await createBatteryUseCase.execute(batteryParams);

      await createBatteryUseCase.execute(batteryParams);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a new battery identical to another but with a modified parameter", async () => {
    const batteryParamsOne = {
      c20_ah: 40,
      cca_a: 260,
      code: "M40SD/M40SE",
      polarity: "D/E",
      rc_min: 55,
      warrantly_m: 18,
    };

    const batteryParamsTwo = {
      c20_ah: 40,
      cca_a: 260,
      code: "M40SD/M40SE",
      polarity: "D/E",
      rc_min: 60,
      warrantly_m: 18,
    };

    await createBatteryUseCase.execute(batteryParamsOne);

    await createBatteryUseCase.execute(batteryParamsTwo);

    const batteryCreated = await batteriesRepositoryInMemory.findOneByParams(
      batteryParamsTwo
    );
    expect(batteryCreated).toHaveProperty("id");
  });
});
