export type HandleDate = string | Date;

export class Client {
  public readonly id: number;
  public name: string;
  public lastName: string;
  public email: string;
  public cpf: string;
  public birthDate: HandleDate;
  public passport?: string | null;

  constructor(
    name: string,
    lastName: string,
    email: string,
    cpf: string,
    birthDate: HandleDate,
    passport: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.passport = passport;
  }
}
