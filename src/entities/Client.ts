export type HandleDate = Date | string;

export class Client {
  public readonly id: number;
  public name: string;
  public lastName: string;
  public email: string;
  public cpf: string;
  public birthDate: HandleDate;
  public passport?: string | null;

  constructor(props: Omit<Client,'id'>, id?:number ) {
    Object.assign(this,props)
  }
}
