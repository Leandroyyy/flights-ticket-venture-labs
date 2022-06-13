
export interface ICreateClientRequestDTO{
    id?:number; 
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    birthDate: string | Date;
    passport?: string | null;
}