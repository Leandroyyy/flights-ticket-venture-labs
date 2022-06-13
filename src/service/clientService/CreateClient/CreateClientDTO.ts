
export interface ICreateClientRequestDTO{
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    birthDate: string | Date;
    passport?: string | null;
}