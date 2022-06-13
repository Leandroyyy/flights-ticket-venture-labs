

export interface IFindClientByIdResponseDTO{
    id?:number; 
    name: string;
    lastName: string;
    email: string;
    cpf: string;
    birthDate: string;
    passport?: string | null;
}