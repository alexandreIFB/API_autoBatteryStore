/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Express {
  export interface Request {
    collaborator: {
      id: string;
    };
  }
}
