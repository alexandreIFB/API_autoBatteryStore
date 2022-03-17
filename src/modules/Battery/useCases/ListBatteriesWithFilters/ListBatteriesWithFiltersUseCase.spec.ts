import { BatteriesRepositoryInMemory } from "../../repositories/in-memory/BatteriesRepositoryInMemory";
import { ListBatteriesWithFiltersUseCase } from "./ListBatteriesWithFiltersUseCase";

let listBatteriesWithFiltersUseCase: ListBatteriesWithFiltersUseCase;
let batteriesRepositoryInMemory: BatteriesRepositoryInMemory;

const batteriesMock = [
  {
    id: "e4bd4ace-ad69-439b-8f10-561bee57b984",
    c20_ah: 40,
    polarity: "D/E",
    cca_a: 260,
    rc_min: 55,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-11T19:20:48.184Z"),
  },
  {
    id: "91f33b18-9711-4f89-8e1e-c309c726d230",
    c20_ah: 40,
    polarity: "D/E",
    cca_a: 260,
    rc_min: 55,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-11T19:21:19.798Z"),
  },
  {
    id: "7bfce881-7163-4448-855a-b865c70e7e09",
    c20_ah: 60,
    polarity: "D/E",
    cca_a: 260,
    rc_min: 55,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-17T01:18:49.314Z"),
  },
  {
    id: "f7d88743-218a-4a12-b0a9-e93c937c0e34",
    c20_ah: 40,
    polarity: "D/E",
    cca_a: 250,
    rc_min: 55,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-17T01:19:06.550Z"),
  },
  {
    id: "638b4882-3c3e-4a60-bddf-dfaf7bfa6080",
    c20_ah: 60,
    polarity: "D/E",
    cca_a: 250,
    rc_min: 55,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-17T01:19:11.996Z"),
  },
  {
    id: "ef6906e2-930c-465e-bcee-dbb51de7937d",
    c20_ah: 40,
    polarity: "D/E",
    cca_a: 240,
    rc_min: 55,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-17T01:19:17.436Z"),
  },
  {
    id: "7dda9c92-907e-4f2b-890e-daeedd4b2e8e",
    c20_ah: 40,
    polarity: "D/E",
    cca_a: 240,
    rc_min: 50,
    warrantly_m: 18,
    code: "M40SD/M40SE",
    created_at: new Date("2022-03-17T01:28:54.181Z"),
  },
];

describe("List categories with query filter", () => {
  beforeEach(() => {
    batteriesRepositoryInMemory = new BatteriesRepositoryInMemory();
    batteriesRepositoryInMemory.batteries = batteriesMock;
    listBatteriesWithFiltersUseCase = new ListBatteriesWithFiltersUseCase(
      batteriesRepositoryInMemory
    );
  });

  it("List all categories", async () => {
    const result = await listBatteriesWithFiltersUseCase.execute({});

    const expected = batteriesMock;

    expect(result).toEqual(expected);
  });

  it("List categories with cca_ah = 40", async () => {
    const result = await listBatteriesWithFiltersUseCase.execute({
      c20_ah: 40,
    });

    const expected = [
      {
        id: "e4bd4ace-ad69-439b-8f10-561bee57b984",
        c20_ah: 40,
        polarity: "D/E",
        cca_a: 260,
        rc_min: 55,
        warrantly_m: 18,
        code: "M40SD/M40SE",
        created_at: new Date("2022-03-11T19:20:48.184Z"),
      },
      {
        id: "91f33b18-9711-4f89-8e1e-c309c726d230",
        c20_ah: 40,
        polarity: "D/E",
        cca_a: 260,
        rc_min: 55,
        warrantly_m: 18,
        code: "M40SD/M40SE",
        created_at: new Date("2022-03-11T19:21:19.798Z"),
      },
      {
        id: "f7d88743-218a-4a12-b0a9-e93c937c0e34",
        c20_ah: 40,
        polarity: "D/E",
        cca_a: 250,
        rc_min: 55,
        warrantly_m: 18,
        code: "M40SD/M40SE",
        created_at: new Date("2022-03-17T01:19:06.550Z"),
      },
      {
        id: "ef6906e2-930c-465e-bcee-dbb51de7937d",
        c20_ah: 40,
        polarity: "D/E",
        cca_a: 240,
        rc_min: 55,
        warrantly_m: 18,
        code: "M40SD/M40SE",
        created_at: new Date("2022-03-17T01:19:17.436Z"),
      },
      {
        id: "7dda9c92-907e-4f2b-890e-daeedd4b2e8e",
        c20_ah: 40,
        polarity: "D/E",
        cca_a: 240,
        rc_min: 50,
        warrantly_m: 18,
        code: "M40SD/M40SE",
        created_at: new Date("2022-03-17T01:28:54.181Z"),
      },
    ];

    expect(result).toEqual(expected);
  });
});
